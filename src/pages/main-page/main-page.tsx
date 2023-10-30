import Hero from '../../components/hero/hero';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';
import {
  getProductsFetchingStatus,
  getProducts,
} from '../../store/products-data/products-data.selectors';
import RandomCardsLict from '../../components/random-cards-list/random-cards-list';

import Map from '../../components/map/map';
import Loader from '../../components/loader/loader';
import { RequestStatus } from '../../const';
import LastReview from '../../components/last-review/last-review';

function MainPage(): JSX.Element {
  const products = useAppSelector(getProducts);
  const productsFetchingStatus = useAppSelector(getProductsFetchingStatus);

  if (productsFetchingStatus === RequestStatus.Pending) {
    return <Loader />;
  }

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <RandomCardsLict randomProducts={products.slice(0, 3)} />
        <LastReview />
        <Map />
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
