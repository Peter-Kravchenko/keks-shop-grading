import { ProductBlock } from '../../const';
import { useAppSelector } from '../../hooks';
import { getProducts } from '../../store/products-data/products-data.selectors';
import ShowMoreButton from '../buttons/show-more-button/show-more-button';
import Card from '../card/card';
import ProductNotFound from '../product-not-found/product-not-found';

function CatalogCardsList(): JSX.Element {
  const products = useAppSelector(getProducts);

  return (
    <section className="catalog">
      <div className="container">
        <h2 className="visually-hidden">Каталог</h2>
        <div className="catalog__wrapper">
          <ul className="catalog__list">
            {products.length === 0 && <ProductNotFound />}
            {products.length > 0 &&
              products.map((product) => (
                <Card
                  key={product.id}
                  product={product}
                  productBlock={ProductBlock.Catalog}
                />
              ))}
          </ul>
          <div className="catalog__button-wrapper">
            <ShowMoreButton />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CatalogCardsList;
