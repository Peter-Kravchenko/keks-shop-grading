import { TReview } from '../../types/review';

type TReviewProps = {
  review: TReview;
};

function Review({ review }: TReviewProps): JSX.Element {
  return (
    <div className="review">
      <div className="review__inner-wrapper review__inner-wrapper--border">
        <time className="review__date" dateTime={review.isoDate}>
          {review.isoDate}
        </time>
        <span className="review__author">
          Уважаемый(-ая) {review.user.name}
        </span>
        <div className="star-rating">
          <svg
            className="star-rating__star star-rating__star--active"
            width={30}
            height={30}
            aria-hidden="true"
          >
            <use xlinkHref="#icon-star" />
          </svg>
          <svg
            className="star-rating__star star-rating__star--active"
            width={30}
            height={30}
            aria-hidden="true"
          >
            <use xlinkHref="#icon-star" />
          </svg>
          <svg
            className="star-rating__star star-rating__star--active"
            width={30}
            height={30}
            aria-hidden="true"
          >
            <use xlinkHref="#icon-star" />
          </svg>
          <svg
            className="star-rating__star star-rating__star--active"
            width={30}
            height={30}
            aria-hidden="true"
          >
            <use xlinkHref="#icon-star" />
          </svg>
          <svg
            className="star-rating__star star-rating__star--active"
            width={30}
            height={30}
            aria-hidden="true"
          >
            <use xlinkHref="#icon-star" />
          </svg>
        </div>
        <div className="review__text-wrapper">
          {review.positive && <p className="review__text">{review.positive}</p>}
          {review.negative && <p className="review__text">{review.negative}</p>}
        </div>
        <div className="review__image-wrapper">
          <picture>
            <img
              src={review.user.avatarUrl}
              width={162}
              height={162}
              alt={review.user.name}
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default Review;
