import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchProduct, fetchReviews } from '../../store/api-actions';
import {
  getFetchingStatus,
  getProduct,
} from '../../store/product-data/product-data.selectors';
import { RequestStatus } from '../../const';
import { getReviews } from '../../store/reviews-data/reviews-data.selectors';
import ShowMoreButton from '../../components/buttons/show-more-button/show-more-button';
import Review from '../../components/review/review';
import ReviewForm from '../../components/review-form/review-form';
import ReviewsFilter from '../../components/reviews-filter/reviews-filter';
import ProductDetails from '../../components/product-details/product-details';
import BackButton from '../../components/buttons/back-button/back-button';

function ProductPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchProduct(id));
    }
  }, [dispatch, id]);

  const product = useAppSelector(getProduct);
  const productFetchingStatus = useAppSelector(getFetchingStatus);

  useEffect(() => {
    if (id && product) {
      dispatch(fetchReviews(id));
    }
  }, [dispatch, id, product]);

  const reviews = useAppSelector(getReviews);

  if (productFetchingStatus === RequestStatus.Pending) {
    return <div>Loading</div>;
  }

  return productFetchingStatus === RequestStatus.Success && product ? (
    <div className="wrapper">
      {/* <HeaderAuth /> */}
      <main>
        <h1 className="visually-hidden">Карточка: пользователь авторизован</h1>
        <BackButton />
        <ProductDetails product={product} />
        <ReviewForm />
        <ReviewsFilter />
        <section className="comments">
          <h2 className="visually-hidden">Список комментариев</h2>
          <div className="container">
            <div className="comments__wrapper">
              {reviews.map((review) => (
                <Review key={review.id} review={review} />
              ))}
            </div>
            <div className="comments__show-more">
              <ShowMoreButton block="review" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  ) : (
    <div>Sorry, product not found</div>
  );
}

export default ProductPage;
