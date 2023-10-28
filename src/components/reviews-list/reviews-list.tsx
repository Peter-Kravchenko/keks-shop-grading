import { TReview } from '../../types/review';
import ShowMoreButton from '../buttons/show-more-button/show-more-button';
import Review from '../review/review';

type TReviewsListProps = {
  reviews: TReview[];
};
function ReviewsList({ reviews }: TReviewsListProps): JSX.Element {
  return (
    <div>
      {reviews.length > 0 ? (
        <section className="comments">
          <h2 className="visually-hidden">Список комментариев</h2>
          <div className="container">
            <div className="comments__wrapper">
              {reviews.map((review) => (
                <Review key={review.id} review={review} />
              ))}
            </div>
            <div className="comments__show-more">
              <ShowMoreButton reviewBlock />
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
