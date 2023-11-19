import cn from 'classnames';
import { AppRoute, ProductBlock } from '../../const';
import { TProducts } from '../../types/products';
import { Link } from 'react-router-dom';
import FavoritesButton from '../buttons/favorites-button/favorites-button';
import { addSpaceInNumber } from '../../utils/utils';

type ProductCardProps = {
  product: TProducts;
  productBlock: ProductBlock;
};

function ProductCard({ product, productBlock }: ProductCardProps): JSX.Element {
  return (
    <li className={`${productBlock}`}>
      <div
        className={cn('card-item', {
          'card-item--big': productBlock === ProductBlock.Catalog,
        })}
      >
        <Link
          to={`${AppRoute.Product}/${product.id}`}
          className="card-item__img-link"
        >
          <div className="card-item__img-wrapper">
            <picture>
              <source type="image/webp" src={product.previewImageWebp} />
              <img
                src={product.previewImageWebp}
                alt={product.title}
                width="326"
                height="332"
              />
            </picture>
          </div>
          {product.isNew && <span className="card-item__label">Новинка</span>}
        </Link>
        <FavoritesButton id={product.id} />
        {productBlock === ProductBlock.Catalog && (
          <span className="card-item__price">
            {addSpaceInNumber(product.price)} p
          </span>
        )}
        <Link
          to={`${AppRoute.Product}/${product.id}`}
          className="card-item__link"
        >
          <h3 className="card-item__title">
            <span>{product.title}</span>
          </h3>
        </Link>
      </div>
    </li>
  );
}

export default ProductCard;
