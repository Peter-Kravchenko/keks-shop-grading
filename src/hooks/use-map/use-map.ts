import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Map, TileLayer } from 'leaflet';
import { COPYRIGHT, TITLE_LAYER, defaultCoordinates } from '../../const';

type UseMapProps = {
  mapRef: MutableRefObject<HTMLElement | null>;
};

function useMap({ mapRef }: UseMapProps) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: defaultCoordinates.latitude,
          lng: defaultCoordinates.longitude,
        },
        zoom: defaultCoordinates.zoom,
      });

      const layer = new TileLayer(TITLE_LAYER, {
        attribution: COPYRIGHT,
      });

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef]);

  return map;
}

export default useMap;
