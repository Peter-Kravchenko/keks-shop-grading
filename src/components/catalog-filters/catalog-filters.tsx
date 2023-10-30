import CatalogCategoryFilter from '../catalog-category-filter/catalog-category-filter';
import CatalogTypeFilter from '../catalog-type-filter/catalog-type-filter';
import { getCategories } from '../../store/app-process/app-process.selectors';
import { useAppSelector } from '../../hooks';
import { ProductCategory, ProductType } from '../../const';

type CatalogFiltersProps = {
  activeCategory: ProductCategory | null;
  activeType: ProductType[];
};

function CatalogFilters({
  activeCategory,
  activeType,
}: CatalogFiltersProps): JSX.Element {
  const components = useAppSelector(getCategories);

  const types = components.find(
    (component) => component.category === activeCategory
  )?.types as ProductType[];

  return (
    <div className="catalog-filter">
      <div className="container">
        <CatalogCategoryFilter
          components={components}
          activeCategory={activeCategory}
        />
        {types?.length && (
          <CatalogTypeFilter types={types} activeType={activeType} />
        )}
      </div>
    </div>
  );
}

export default CatalogFilters;
