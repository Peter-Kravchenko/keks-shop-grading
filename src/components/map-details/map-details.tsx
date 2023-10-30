import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';

import { TLocation } from '../../types/map';
import useMap from '../../hooks/use-map/use-map';
import { DefaultCoordinates, locations } from '../../const';

type IconConfig = {
  url: string;
  width: number;
  height: number;
  anchorX: number;
  anchorY: number;
};

const defaultIconConfig: IconConfig = {
  url: '/img/content/map-marker1.svg',
  width: 40,
  height: 55,
  anchorX: 14,
  anchorY: 40,
};

const productionIconConfig: IconConfig = {
  url: '/img/content/map-marker2.svg',
  width: 40,
  height: 55,
  anchorX: 14,
  anchorY: 40,
};

function createIcon(config: IconConfig) {
  return new Icon({
    iconUrl: config.url,
    iconSize: [config.width, config.height],
    iconAnchor: [config.anchorX, config.anchorY],
  });
}

type MapWrapperProps = {
  activeLocation: TLocation;
};

function MapDetails({ activeLocation }: MapWrapperProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap({ mapRef });

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      locations.forEach((location) => {
        const marker = new Marker({
          lat: activeLocation.latitude,
          lng: activeLocation.longitude,
        });

        marker
          .setIcon(
            location.id === activeLocation.id
              ? createIcon(productionIconConfig)
              : createIcon(defaultIconConfig)
          )
          .addTo(markerLayer);

        map.setView(
          [DefaultCoordinates.latitude, DefaultCoordinates.longitude],
          DefaultCoordinates.zoom
        );
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, activeLocation]);

  return <div className="map__wrapper" ref={mapRef} />;
}

export default MapDetails;
