import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';

import { TLocation } from '../../types/map';
import useMap from '../../hooks/use-map/use-map';
import { defaultCoordinates, locations } from '../../const';

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

const activeIconConfig: IconConfig = {
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
          lat: location.latitude,
          lng: location.longitude,
        });

        marker
          .setIcon(
            location.id === activeLocation?.id
              ? createIcon(activeIconConfig)
              : createIcon(defaultIconConfig)
          )
          .addTo(markerLayer);

        map.setView(
          [defaultCoordinates.latitude, defaultCoordinates.longitude],
          defaultCoordinates.zoom
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
