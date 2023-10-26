import cn from 'classnames';
import { ProductBlock, ProductImgSize } from '../../const';
import { TProducts } from '../../types/products';

type TCardProps = {
  product: TProducts;
  productBlock: ProductBlock;
};

function Card({ product, productBlock }: TCardProps): JSX.Element {
  const imgSize =
    productBlock === ProductBlock.Catalog
      ? ProductImgSize.Large
      : ProductImgSize.Small;

  return (
    <li className={`${productBlock}`}>
      <div className="card-item card-item--big">
        <a className="card-item__img-link" href="#">
          <div className="card-item__img-wrapper">
            <picture>
              <source
                type="image/webp"
                srcSet={`${product.previewImageWebp}, ${product.previewImageWebp} 2x`}
              />
              <img
                src={product.previewImageWebp}
                srcSet={`${product.previewImage} 2x`}
                alt={product.title}
                {...imgSize}
              />
            </picture>
          </div>
          {product.isNew && <span className="card-item__label">Новинка</span>}
        </a>
        <button
          className={cn({
            ['card-item__favorites']: true,
            ['card-item__favorites--active']: product.isFavorite,
          })}
        >
          <span className="visually-hidden">Добавить в избранное</span>
          <svg width={51} height={41} aria-hidden="true">
            <use xlinkHref="#icon-like" />
          </svg>
        </button>
        {productBlock === ProductBlock.Catalog && (
          <span className="card-item__price">{product.price} p</span>
        )}
        <a className="card-item__link" href="#">
          <h3 className="card-item__title">
            <span>{product.title}</span>
          </h3>
        </a>
      </div>
    </li>
  );
}

export default Card;
