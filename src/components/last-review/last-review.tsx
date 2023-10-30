import { RequestStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import {
  getLastReviewFetchingStatus,
  getLastReview,
} from '../../store/last-review-data/last-review-data.selectors';
import Loader from '../loader/loader';
import Review from '../review/review';

function LastReview() {
  const lastReview = useAppSelector(getLastReview);
  const lastReviewFetchingStatus = useAppSelector(getLastReviewFetchingStatus);

  if (lastReviewFetchingStatus === RequestStatus.Pending) {
    return <Loader />;
  }

  return (
    <section className="last-review">
      <div className="container">
        <h2 className="last-review__title">последний отзыв</h2>
        {lastReview ? (
          <Review review={lastReview} />
        ) : (
          <h2>Пока нет отзывов</h2>
        )}
      </div>
    </section>
  );
}

export default LastReview;
