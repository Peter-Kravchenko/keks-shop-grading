import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getReviewsCountOnPage } from '../../store/app-process/app-process.selectors';
import { TReview } from '../../types/review';
import ShowMoreButton from '../buttons/show-more-button/show-more-button';
import Review from '../review/review';
import { resetReviewsCountAction } from '../../store/app-process/app-process.slice';

type TReviewsListProps = {
  reviews: TReview[];
};
function ReviewsList({ reviews }: TReviewsListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const maxReviewsCountOnPage = useAppSelector(getReviewsCountOnPage);
  const reviewsOnPage = reviews.slice(
    0,
    Math.min(reviews.length, maxReviewsCountOnPage)
  );
  const isShowMore = reviews.length > reviewsOnPage.length;

  useEffect(() => {
    dispatch(resetReviewsCountAction());
  }, [dispatch]);

  return (
    <div>
      {reviewsOnPage.length > 0 ? (
        <section className="comments">
          <h2 className="visually-hidden">Список комментариев</h2>
          <div className="container">
            <div className="comments__wrapper">
              {reviewsOnPage.map((review) => (
                <Review key={review.id} review={review} />
              ))}
            </div>
            <div className="comments__show-more">
              {isShowMore ? <ShowMoreButton reviewBlock /> : null}
            </div>
          </div>
        </section>
      ) : (
        <div className="empty-results__wrapper">
          <h2 className="empty-results__title">
            По вашему запросу информации не найдено
          </h2>
          <button
            className="btn btn--second empty-results__button"
            type="button"
          >
            Сбросить фильтры
          </button>
          <svg width={180} height={166} aria-hidden="true">
            <use xlinkHref="#icon-cake" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default ReviewsList;
