import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import CatalogFilters from '../../components/catalog-filters/catalog-filters';
import CatalogCardsList from '../../components/catalog-cards-list/catalog-cards-list';
import { getProducts } from '../../store/products-data/products-data.selectors';
import { useAppDispatch, useAppSelector } from '../../hooks';
import BackButton from '../../components/buttons/back-button/back-button';
import {
  getActiveCategory,
  getActiveType,
} from '../../store/app-process/app-process.selectors';
import { useEffect } from 'react';
import { resetProductFilters } from '../../store/app-process/app-process.slice';

function CatalogPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const products = useAppSelector(getProducts);

  const activeCategory = useAppSelector(getActiveCategory);
  const activeType = useAppSelector(getActiveType);

  let filteredProducts = products;

  if (activeCategory) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === activeCategory
    );
  }
  if (activeType.length) {
    filteredProducts = filteredProducts.filter((product) =>
      activeType.includes(product.type)
    );
  }

  useEffect(() => {
    dispatch(resetProductFilters());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <h1 className="visually-hidden">Каталог товаров</h1>
        <BackButton />
        <CatalogFilters
          activeCategory={activeCategory}
          activeType={activeType}
        />
        <CatalogCardsList products={filteredProducts} />
      </main>
      <Footer />
    </div>
  );
}

export default CatalogPage;
