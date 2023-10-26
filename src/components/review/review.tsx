import { TReview } from '../../types/review';

type TReviewProps = {
  review: TReview;
};

function Review({ review }: TReviewProps): JSX.Element {
  return (
    <section className="last-review">
      <div className="container">
        <h2 className="last-review__title">последний отзыв</h2>
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
              <p className="review__text">{review.positive}</p>
              <p className="review__text">{review.negative}</p>
            </div>
            <div className="review__image-wrapper">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${review.user.avatarUrl}, ${review.user.avatarUrl} 2x`}
                />
                <img
                  src={review.user.avatarUrl}
                  srcSet={`${review.user.avatarUrl} 2x`}
                  width={162}
                  height={162}
                  alt="Кот"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
