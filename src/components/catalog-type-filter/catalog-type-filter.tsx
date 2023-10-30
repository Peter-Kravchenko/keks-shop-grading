import { ProductType, ProductTypeRUS } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setActiveType } from '../../store/app-process/app-process.slice';

type CatalogTypeFilterProps = {
  types: ProductType[];
  activeType: ProductType[];
};

function CatalogTypeFilter({ types, activeType }: CatalogTypeFilterProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog-filter__second-level">
      <h3 className="catalog-filter__title catalog-filter__title--second-level">
        начинки
      </h3>
      <ul className="catalog-filter__list catalog-filter__list--second-level">
        {types.map((type) => (
          <li
            className="catalog-filter__item catalog-filter__item--second-level"
            key={type}
          >
            <div className="custom-toggle custom-toggle--checkbox">
              <input
                type="checkbox"
                value={type}
                id={`catalog-second-level-id-${type}`}
                name="catalog-second-level"
                onChange={() => {
                  dispatch(setActiveType(type));
                }}
                checked={activeType?.includes(type)}
              />
              <label
                className="custom-toggle__label"
                htmlFor={`catalog-second-level-id-${type}`}
              >
                {ProductTypeRUS[type]}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogTypeFilter;
