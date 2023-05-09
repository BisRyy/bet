import { useState, useCallback, useMemo, memo } from 'react';
import Map, { Layer, Source } from 'react-map-gl';
// @mui
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
// components
import { MapPopup, MapControl } from '../../../../components/map';

// ----------------------------------------------------------------------

function MapHighlightByFilter({ ...other }) {
  const theme = useTheme();

  const countiesLayer = {
    id: 'counties',
    type: 'fill',
    'source-layer': 'original',
    paint: {
      'fill-outline-color': theme.palette.grey[900],
      'fill-color': theme.palette.grey[900],
      'fill-opacity': 0.12,
    },
  };

  const highlightLayer = {
    id: 'counties-highlighted',
    type: 'fill',
    source: 'counties',
    'source-layer': 'original',
    paint: {
      'fill-outline-color': theme.palette.error.main,
      'fill-color': theme.palette.error.main,
      'fill-opacity': 0.48,
    },
  };

  const [hoverInfo, setHoverInfo] = useState(null);

  const onHover = useCallback((event) => {
    const county = event.features && event.features[0];

    setHoverInfo({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
      countyName: county && county.properties?.COUNTY,
    });
  }, []);

  const selectedCounty = (hoverInfo && hoverInfo.countyName) || '';

  const filter = useMemo(() => ['in', 'COUNTY', selectedCounty], [selectedCounty]);

  return (
    <Map
      initialViewState={{
        latitude: 38.88,
        longitude: -98,
        zoom: 3,
      }}
      minZoom={2}
      onMouseMove={onHover}
      interactiveLayerIds={['counties']}
      {...other}
    >
      <MapControl />

      <Source type="vector" url="mapbox://mapbox.82pkq93d">
        <Layer beforeId="waterway-label" {...countiesLayer} />
        <Layer beforeId="waterway-label" {...highlightLayer} filter={filter} />
      </Source>

      {selectedCounty && hoverInfo && (
        <MapPopup longitude={hoverInfo.longitude} latitude={hoverInfo.latitude} closeButton={false}>
          <Typography variant="body2" sx={{ color: 'common.white' }}>
            {selectedCounty}
          </Typography>
        </MapPopup>
      )}
    </Map>
  );
}

export default memo(MapHighlightByFilter);
