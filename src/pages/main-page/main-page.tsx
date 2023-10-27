import Hero from '../../components/hero/hero';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';
import { getLastReview } from '../../store/last-review-data/last-review-data.selectors';
import {
  getFetchingStatus,
  getProducts,
} from '../../store/products-data/products-data.selectors';
import RandomCardsLict from '../../components/random-cards-list/random-cards-list';
import Review from '../../components/review/review';
import Map from '../../components/map/map';
import Loader from '../../components/loader/loader';
import { RequestStatus } from '../../const';

function MainPage(): JSX.Element {
  const products = useAppSelector(getProducts);
  const lastReview = useAppSelector(getLastReview);
  const productsFetchingStatus = useAppSelector(getFetchingStatus);

  if (productsFetchingStatus === RequestStatus.Pending) {
    return <Loader />;
  }

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <RandomCardsLict randomProducts={products.slice(0, 3)} />
        <section className="last-review">
          <div className="container">
            <h2 className="last-review__title">последний отзыв</h2>
            {/* <Review review={lastReview} /> */}
          </div>
        </section>
        <Map />
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
