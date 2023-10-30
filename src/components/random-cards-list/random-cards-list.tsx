import { Link } from 'react-router-dom';
import { TProducts } from '../../types/products';
import { AppRoute, ProductBlock } from '../../const';
import ProductCard from '../product-card/product-card';

type RandomCardsListProps = {
  randomProducts: TProducts[];
};

function RandomCardsLict({
  randomProducts,
}: RandomCardsListProps): JSX.Element {
  return (
    <section className="random-main">
      <div className="container">
        <h2 className="random-main__title">кексы</h2>
        <ul className="random-main__list">
          {randomProducts.map((randomProduct) => (
            <ProductCard
              product={randomProduct}
              key={randomProduct.id}
              productBlock={ProductBlock.Main}
            />
          ))}
          <li className="random-main__item">
            <Link to={AppRoute.Catalog} className="random-main__link">
              <div className="random-main__icon-wrapper">
                <div className="random-main__icon">
                  <svg width={120} height={130} aria-hidden="true">
                    <use xlinkHref="#icon-keks" />
                  </svg>
                </div>
              </div>
              <h3 className="random-main__subtitle">Все кексы</h3>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default RandomCardsLict;
