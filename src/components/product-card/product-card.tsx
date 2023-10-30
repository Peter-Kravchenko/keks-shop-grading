import cn from 'classnames';
import { AppRoute, ProductBlock, ProductImgSize } from '../../const';
import { TProducts } from '../../types/products';
import { Link } from 'react-router-dom';
import FavoritesButton from '../buttons/favorites-button/favorites-button';

type ProductCardProps = {
  product: TProducts;
  productBlock: ProductBlock;
};

function ProductCard({ product, productBlock }: ProductCardProps): JSX.Element {
  const imgSize =
    productBlock === ProductBlock.Catalog
      ? ProductImgSize.Large
      : ProductImgSize.Small;

  return (
    <li className={`${productBlock}`}>
      <div className="card-item card-item--big">
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
                {...imgSize}
              />
            </picture>
          </div>
          {product.isNew && <span className="card-item__label">Новинка</span>}
        </Link>
        <FavoritesButton id={product.id} />
        {productBlock === ProductBlock.Catalog && (
          <span className="card-item__price">{product.price} p</span>
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
