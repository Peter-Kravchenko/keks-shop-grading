import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchProduct, fetchReviews } from '../../store/api-actions';
import {
  getFetchingStatus,
  getProduct,
} from '../../store/product-data/product-data.selectors';
import { AuthorizationStatus, RequestStatus } from '../../const';
import { getReviews } from '../../store/reviews-data/reviews-data.selectors';
import Footer from '../../components/footer/footer';
import ReviewForm from '../../components/review-form/review-form';
import ReviewsFilterSort from '../../components/reviews-filter-sort/reviews-filter-sort';
import ProductDetails from '../../components/product-details/product-details';
import BackButton from '../../components/buttons/back-button/back-button';
import Header from '../../components/header/header';
import Loader from '../../components/loader/loader';
import ReviewsList from '../../components/reviews-list/reviews-list';

type ProductPageProps = {
  authStatus: AuthorizationStatus;
};

function ProductPage({ authStatus }: ProductPageProps): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const isAuth = authStatus === AuthorizationStatus.Auth;

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
    return <Loader />;
  }

  return productFetchingStatus === RequestStatus.Success && product ? (
    <div className="wrapper">
      <Header />
      <main>
        <h1 className="visually-hidden">Карточка: пользователь авторизован</h1>
        <BackButton />
        <ProductDetails product={product} />
        {isAuth && <ReviewForm id={product.id} />}
        <ReviewsFilterSort />
        <ReviewsList reviews={reviews} />
      </main>
      <Footer />
    </div>
  ) : (
    <h2>Кексы не найдены на сервере, попробуйте перезагрузить страницу</h2>
  );
}

export default ProductPage;
