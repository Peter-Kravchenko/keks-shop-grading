import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import { fetchProduct, fetchReviews } from '../../store/api-actions';
import {
  getProductFetchingStatus,
  getProduct,
} from '../../store/product-data/product-data.selectors';
import { RequestStatus } from '../../const';
import {
  getReviews,
  getReviewsFetchingStatus,
} from '../../store/reviews-data/reviews-data.selectors';
import Footer from '../../components/footer/footer';
import ReviewForm from '../../components/review-form/review-form';
import ReviewsFilter from '../../components/reviews-filter/reviews-filter';
import ProductDetails from '../../components/product-details/product-details';
import BackButton from '../../components/buttons/back-button/back-button';
import Header from '../../components/header/header';
import Loader from '../../components/loader/loader';
import ReviewsList from '../../components/reviews-list/reviews-list';
import {
  getFilterByRating,
  getSortByDate,
} from '../../store/app-process/app-process.selectors';
import { filterByRating, sortByDate } from '../../utils/utils';
import { resetFilterSortReviews } from '../../store/app-process/app-process.slice';

function ProductPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchProduct(id));
    }
  }, [dispatch, id]);

  const product = useAppSelector(getProduct);
  const productFetchingStatus = useAppSelector(getProductFetchingStatus);

  useEffect(() => {
    if (id && product) {
      dispatch(fetchReviews(id));
    }
  }, [dispatch, id, product]);

  const reviews = useAppSelector(getReviews);
  const reviewsFetchingStatus = useAppSelector(getReviewsFetchingStatus);
  const activeFilterByRating = useAppSelector(getFilterByRating);
  const activeSortByDate = useAppSelector(getSortByDate);

  const reviewsFilteredByRating = filterByRating[activeFilterByRating](reviews);
  const reviewsSortedByDate = sortByDate[activeSortByDate](
    reviewsFilteredByRating
  );

  const [isReviewFormOpen, setReviewFormOpen] = useState(false);

  useEffect(() => {
    dispatch(resetFilterSortReviews());
  }, [dispatch]);

  if (
    productFetchingStatus === RequestStatus.Pending ||
    reviewsFetchingStatus === RequestStatus.Pending
  ) {
    return <Loader />;
  }

  return productFetchingStatus === RequestStatus.Success && product ? (
    <div className="wrapper">
      <Header />
      <main>
        <h1 className="visually-hidden">Карточка: пользователь авторизован</h1>
        <BackButton />
        <ProductDetails
          product={product}
          isReviewFormOpen={isReviewFormOpen}
          setReviewFormOpen={setReviewFormOpen}
        />
        {isReviewFormOpen && <ReviewForm id={product.id} />}
        <ReviewsFilter
          activeFilterByRating={activeFilterByRating}
          activeSortByDate={activeSortByDate}
        />
        <ReviewsList reviews={reviewsSortedByDate} />
      </main>
      <Footer />
    </div>
  ) : (
    <h2>Кексы не найдены на сервере, попробуйте перезагрузить страницу</h2>
  );
}

export default ProductPage;
