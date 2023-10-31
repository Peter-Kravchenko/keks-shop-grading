import cn from 'classnames';
import { FilterRatingMap, SortDateMap } from '../../const';
import { useAppDispatch } from '../../hooks';

import {
  setActiveFilterByRating,
  setActiveSortByDate,
} from '../../store/app-process/app-process.slice';

type ReviewsFilterProps = {
  activeFilterByRating: FilterRatingMap;
  activeSortByDate: SortDateMap;
};

function ReviewsFilter({
  activeFilterByRating,
  activeSortByDate,
}: ReviewsFilterProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="filter-sort">
      <div className="container">
        <div className="filter-sort__inner">
          <div className="filter-sort__filter-wrap">
            <h3 className="filter-sort__filter-title">Показать с рейтингом</h3>
            <div className="filter-sort__filter">
              <button className="filter-sort__filter-btn" type="button">
                {activeFilterByRating}
                <svg
                  className="filter-sort__filter-icon"
                  width={14}
                  height={15}
                  aria-hidden="true"
                >
                  <use xlinkHref="#icon-polygon" />
                </svg>
              </button>
              <ul className="filter-sort__filter-list">
                {Object.values(FilterRatingMap).map((type, index) => (
                  <li className="filter-sort__filter-item" key={type}>
                    <div className="custom-toggle custom-toggle--sorting">
                      <input
                        type="radio"
                        id={`review-sort-${index}`}
                        name={type}
                        checked={activeFilterByRating === type}
                        onChange={() => {
                          dispatch(setActiveFilterByRating(type));
                        }}
                      />
                      <label
                        className="custom-toggle__label"
                        htmlFor={`review-sort-${index}`}
                      >
                        {type}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="filter-sort__sort-wrap">
            <h3 className="filter-sort__sort-title">Сортировать по дате</h3>
            <div className="filter-sort__sort-btns-wrap">
              {Object.values(SortDateMap).map((type) => (
                <button
                  className={cn(
                    'filter-sort__sort-btn',
                    `filter-sort__sort-btn--${type}`,
                    {
                      'filter-sort__sort-btn--active':
                        activeSortByDate === type,
                    }
                  )}
                  key={type}
                  type="button"
                  aria-label={`Сортировать по ${
                    type === SortDateMap.Increase ? 'возрастанию' : 'убыванию'
                  }`}
                  onClick={() => {
                    dispatch(setActiveSortByDate(type));
                  }}
                >
                  <svg
                    className="filter-sort__sort-icon"
                    width={19}
                    height={13}
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-chevron-top" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewsFilter;
