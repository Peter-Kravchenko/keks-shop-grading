import Hero from '../../components/hero/hero';
import Footer from '../../components/footer/footer';
import HeaderAuth from '../../components/header-auth/header-auth';
import { useAppSelector } from '../../hooks';
import { getLastReview } from '../../store/last-review-data/last-review-data.selectors';
import { getProducts } from '../../store/products-data/products-data.selectors';
import RandomCardsLict from '../../components/random-cards-list/random-cards-list';
import Review from '../../components/review/review';
import Map from '../../components/map/map';

function MainPage(): JSX.Element {
  const products = useAppSelector(getProducts);
  const lastReview = useAppSelector(getLastReview);

  return (
    <div className="wrapper">
      <HeaderAuth />
      <main>
        <Hero />
        <RandomCardsLict randomProducts={products.slice(0, 3)} />
        {/* <Review review={lastReview} /> */}
        <Map />
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
