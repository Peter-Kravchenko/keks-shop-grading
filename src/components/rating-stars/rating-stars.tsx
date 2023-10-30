import { Fragment } from 'react';
import { TProduct } from '../../types/product';
import cn from 'classnames';
import { RatingBlock, stars } from '../../const';
import { TReview } from '../../types/review';

type RatingStarsProps = {
  rating: TProduct['rating'];
  ratingBlock: RatingBlock;
  reviewCount?: TProduct['reviewCount'];
};

function RatingStars({
  rating,
  ratingBlock,
  reviewCount,
}: RatingStarsProps): JSX.Element {
  const isProduct = ratingBlock === RatingBlock.product;

  return (
    <div className={cn('star-rating', { 'star-rating--big': isProduct })}>
      {stars.map((star) => (
        <Fragment key={star}>
          <svg
            className={cn('star-rating__star', {
              'star-rating__star--active': star <= Math.round(rating),
            })}
            width={30}
            height={30}
            aria-hidden="true"
          >
            <use xlinkHref="#icon-star" />
          </svg>
        </Fragment>
      ))}
      {isProduct && <span className="star-rating__count">{reviewCount}</span>}
    </div>
  );
}

export default RatingStars;
