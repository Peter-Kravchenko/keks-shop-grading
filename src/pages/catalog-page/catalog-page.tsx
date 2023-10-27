import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { AppRoute } from '../../const';
import CatalogFilters from '../../components/catalog-filters/catalog-filters';
import CatalogCardsList from '../../components/catalog-cards-list/catalog-cards-list';

function CatalogPage(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <h1 className="visually-hidden">Каталог товаров</h1>
        <div className="back-link">
          <div className="container">
            <Link to={AppRoute.Main} className="back-link__link">
              Назад
              <svg
                className="back-link__icon"
                width={30}
                height={16}
                aria-hidden="true"
              >
                <use xlinkHref="#icon-arrow-left" />
              </svg>
            </Link>
          </div>
        </div>
        <CatalogFilters />
        <CatalogCardsList />
      </main>
      <Footer />
    </div>
  );
}

export default CatalogPage;
