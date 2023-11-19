import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, RatingBlock } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-data/user-data.selectors';
import { TProduct } from '../../types/product';
import { addSpaceInNumber } from '../../utils/utils';
import FavoritesButton from '../buttons/favorites-button/favorites-button';
import RatingStars from '../rating-stars/rating-stars';
import DescriptionDetails from '../description-details/description-details';

type ProductDetailsProps = {
  product: TProduct;
  isReviewFormOpen: boolean;
  setReviewFormOpen: (revievFormOpen: boolean) => void;
};

function ProductDetails({
  product,
  isReviewFormOpen,
  setReviewFormOpen,
}: ProductDetailsProps): JSX.Element {
  const navigate = useNavigate();
  const isAuth = useAppSelector(getAuthStatus) === AuthorizationStatus.Auth;

  return (
    <section className="item-details item-details--form-open">
      <div className="container">
        <div className="item-details__wrapper">
          <div className="item-details__top-wrapper">
            <h2 className="item-details__name">{product.title}</h2>
            <span className="item-details__price">
              {addSpaceInNumber(product.price)} р
            </span>
          </div>
          <div className="item-details__weight-wrapper">
            <span className="item-details__weight">
              {addSpaceInNumber(product.weight)} грамм
            </span>
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
                ratingBlock={RatingBlock.Product}
                reviewCount={product.reviewCount}
              />
              <DescriptionDetails description={product.description} />
              <div className="item-details__button-wrapper">
                <FavoritesButton id={product.id} />
                {isReviewFormOpen ? (
                  <button
                    className="btn btn--second"
                    type="button"
                    onClick={() => setReviewFormOpen(false)}
                  >
                    Отменить отзыв
                  </button>
                ) : (
                  <button
                    className="btn btn--second"
                    type="button"
                    onClick={() => {
                      setReviewFormOpen(true);
                      if (!isAuth) {
                        navigate(AppRoute.Login);
                      }
                    }}
                  >
                    Оставить отзыв
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
