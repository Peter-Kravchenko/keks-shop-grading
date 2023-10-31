import CatalogCategoryFilter from '../catalog-category-filter/catalog-category-filter';
import CatalogTypeFilter from '../catalog-type-filter/catalog-type-filter';
import { getCategories } from '../../store/app-process/app-process.selectors';
import { useAppSelector } from '../../hooks';
import { ProductCategoryMap, ProductTypeMap } from '../../const';

type CatalogFiltersProps = {
  activeCategory: ProductCategoryMap | null;
  activeType: ProductTypeMap[];
};

function CatalogFilters({
  activeCategory,
  activeType,
}: CatalogFiltersProps): JSX.Element {
  const components = useAppSelector(getCategories);

  const types = components.find(
    (component) => component.category === activeCategory
  )?.types as ProductTypeMap[];

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
