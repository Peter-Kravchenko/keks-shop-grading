import { useEffect } from 'react';
import { ProductBlock } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getProductsCounOnPage } from '../../store/app-process/app-process.secectors';
import { TProducts } from '../../types/products';
import ShowMoreButton from '../buttons/show-more-button/show-more-button';
import ToTheBeginingButton from '../buttons/to-the-begining-button/to-the-begining-button';
import ProductCard from '../product-card/product-card';
import ProductNotFound from '../product-not-found/product-not-found';
import { resetProductsCountAction } from '../../store/app-process/app-process.slice';

type CatalogCardsListProps = {
  products: TProducts[];
};

function CatalogCardsList({ products }: CatalogCardsListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const maxProductsCountOnPage = useAppSelector(getProductsCounOnPage);

  const productsOnPage = products.slice(
    0,
    Math.min(products.length, maxProductsCountOnPage)
  );
  const isShowMore = products.length > productsOnPage.length;

  useEffect(() => {
    dispatch(resetProductsCountAction());
  }, [dispatch]);

  return (
    <section className="catalog">
      <div className="container">
        <h2 className="visually-hidden">Каталог</h2>
        <div className="catalog__wrapper">
          <ul className="catalog__list">
            {productsOnPage.length === 0 && <ProductNotFound />}
            {productsOnPage.length > 0 &&
              productsOnPage.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  productBlock={ProductBlock.Catalog}
                />
              ))}
          </ul>
          <div className="catalog__button-wrapper">
            {isShowMore ? <ShowMoreButton /> : <ToTheBeginingButton />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CatalogCardsList;
