import { useState } from 'react';
import MapAdress from '../map-adress/map-adress';
import { locations } from '../../const';
import { TLocation } from '../../types/map';
import MapDetails from '../map-details/map-details';

function Map(): JSX.Element {
  const [activeLocation, setActiveLocation] = useState<TLocation>(locations[0]);

  return (
    <section className="map">
      <div className="container">
        <h2 className="map__title">адреса</h2>
        <MapDetails activeLocation={activeLocation} />
        <ul className="map__addresses">
          {locations.map((location) => (
            <MapAdress
              key={location.id}
              location={location}
              isActive={activeLocation.id === location.id}
              setActive={setActiveLocation}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Map;
