import { useState, useEffect, memo } from 'react';
import Map, { Layer, Source } from 'react-map-gl';
// @mui
import { useTheme } from '@mui/material/styles';
// components
import { MapControl } from '../../../../components/map';

// ----------------------------------------------------------------------

function MapGeoJSONAnimation({ ...other }) {
  const theme = useTheme();

  const pointLayer = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 10,
      'circle-color': theme.palette.error.main,
    },
  };

  const [pointData, setPointData] = useState(null);

  useEffect(() => {
    const animation = window.requestAnimationFrame(() =>
      setPointData(
        pointOnCircle({
          center: [-100, 0],
          angle: Date.now() / 1000,
          radius: 20,
        })
      )
    );

    return () => window.cancelAnimationFrame(animation);
  });

  return (
    <Map
      initialViewState={{
        latitude: 0,
        longitude: -100,
        zoom: 3,
      }}
      mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
      {...other}
    >
      <MapControl />

      {pointData && (
        <Source type="geojson" data={pointData}>
          <Layer {...pointLayer} />
        </Source>
      )}
    </Map>
  );
}

export default memo(MapGeoJSONAnimation);

// ----------------------------------------------------------------------

function pointOnCircle({ center, angle, radius }) {
  return {
    type: 'Point',
    coordinates: [center[0] + Math.cos(angle) * radius, center[1] + Math.sin(angle) * radius],
  };
}
