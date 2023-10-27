import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

function BackButton(): JSX.Element {
  return (
    <div className="back-link">
      <div className="container">
        <Link to={AppRoute.Catalog} className="back-link__link">
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
  );
}

export default BackButton;
