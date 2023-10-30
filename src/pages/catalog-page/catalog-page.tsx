import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import CatalogFilters from '../../components/catalog-filters/catalog-filters';
import CatalogCardsList from '../../components/catalog-cards-list/catalog-cards-list';
import { getProducts } from '../../store/products-data/products-data.selectors';
import { useAppSelector } from '../../hooks';
import BackButton from '../../components/buttons/back-button/back-button';

function CatalogPage(): JSX.Element {
  const products = useAppSelector(getProducts);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <h1 className="visually-hidden">Каталог товаров</h1>
        <BackButton />
        <CatalogFilters />
        <CatalogCardsList products={products} />
      </main>
      <Footer />
    </div>
  );
}

export default CatalogPage;
