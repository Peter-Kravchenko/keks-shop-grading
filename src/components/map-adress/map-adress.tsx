import { TLocation } from '../../types/map';

type MapAdressProps = {
  location: TLocation;
  isActive: boolean;
  setActive: (location: TLocation) => void;
};

function MapAdress({
  location,
  isActive,
  setActive,
}: MapAdressProps): JSX.Element {
  return (
    <li className="map__address">
      <div className="custom-toggle custom-toggle--radio custom-toggle--address">
        <input
          type="radio"
          value={location.id}
          id={location.id}
          checked={isActive}
          onChange={() => setActive(location)}
        />
        <label className="custom-toggle__label" htmlFor={location.id}>
          {location.name}
        </label>
        <address className="custom-toggle__address">
          {location.address}
          <svg
            className="custom-toggle__icon"
            width={26}
            height={24}
            aria-hidden="true"
          >
            <use xlinkHref="#icon-keks-footprint" />
          </svg>
        </address>
      </div>
    </li>
  );
}

export default MapAdress;
