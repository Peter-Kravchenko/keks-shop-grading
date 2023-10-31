import cn from 'classnames';
import { useAppDispatch } from '../../hooks';
import { setActiveCategory } from '../../store/app-process/app-process.slice';
import { ProductCategoryMap, ProductCategoryTranslate } from '../../const';

type CatalogCategoryFilterProps = {
  components: ProductCategoryMap[];
  activeCategory: ProductCategoryMap | null;
};

function CatalogCategoryFilter({
  components,
  activeCategory,
}: CatalogCategoryFilterProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog-filter__first-level">
      <h3 className="catalog-filter__title catalog-filter__title--first-level">
        основы
      </h3>
      <ul className="catalog-filter__list catalog-filter__list--first-level">
        {components.map((component) => (
          <li
            className="catalog-filter__item catalog-filter__item--first-level"
            key={component}
          >
            <button
              className={cn('btn btn--filter-first-level', {
                'is-active': activeCategory === component.category,
              })}
              type="button"
              onClick={() => {
                dispatch(
                  setActiveCategory(
                    component.category === activeCategory
                      ? null
                      : component.category
                  )
                );
              }}
            >
              {ProductCategoryTranslate[component.category]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogCategoryFilter;
