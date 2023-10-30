import { RatingBlock } from '../../const';
import { TProduct } from '../../types/product';
import ReadMoreButton from '../buttons/read-more-button/read-more-button';
import RatingStars from '../rating-stars/rating-stars';

type ProductDetailsProps = {
  product: TProduct;
};

function ProductDetails({ product }: ProductDetailsProps): JSX.Element {
  return (
    <section className="item-details item-details--form-open">
      <div className="container">
        <div className="item-details__wrapper">
          <div className="item-details__top-wrapper">
            <h2 className="item-details__name">{product.title}</h2>
            <span className="item-details__price">{product.price} р</span>
          </div>
          <div className="item-details__weight-wrapper">
            <span className="item-details__weight">{product.weight} грамм</span>
          </div>
          <div className="item-details__bottom-wrapper">
            <div className="item-details__image-wrapper">
              <picture>
                <source type="image/webp" src={product.previewImageWebp} />
                <img
                  src={product.previewImage}
                  width={241}
                  height={245}
                  alt={product.title}
                />
              </picture>
              {product.isNew && (
                <span className="item-details__label">Новинка</span>
              )}
            </div>
            <div className="item-details__review-wrapper">
              <RatingStars
                rating={product.rating}
                ratingBlock={RatingBlock.product}
                reviewCount={product.reviewCount}
              />
              <div className="item-details__text-wrapper">
                <span className="item-details__text">
                  {product.description}
                </span>
                <ReadMoreButton />
              </div>
              <div className="item-details__button-wrapper">
                <button className="item-details__like-button">
                  <svg width={45} height={37} aria-hidden="true">
                    <use xlinkHref="#icon-like" />
                  </svg>
                  <span className="visually-hidden">Понравилось</span>
                </button>
                <button className="btn btn--second" type="button">
                  Отменить отзыв
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
