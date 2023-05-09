import PropTypes from 'prop-types';
import { useRef, useState, useCallback, memo } from 'react';
import Map from 'react-map-gl';
// components
import { MapControl } from '../../../../../components/map';
//
import ControlPanel from './ControlPanel';

// ----------------------------------------------------------------------

MapViewportAnimation.propTypes = {
  data: PropTypes.array,
};

function MapViewportAnimation({ data, ...other }) {
  const mapRef = useRef(null);

  const [selectedCity, setSelectedCity] = useState(data[2].city);

  const onSelectCity = useCallback((event, { longitude, latitude }) => {
    setSelectedCity(event.target.value);
    mapRef.current?.flyTo({ center: [longitude, latitude], duration: 2000 });
  }, []);

  return (
    <Map
      initialViewState={{
        latitude: 37.7751,
        longitude: -122.4193,
        zoom: 11,
        bearing: 0,
        pitch: 0,
      }}
      ref={mapRef}
      {...other}
    >
      <MapControl />

      <ControlPanel data={data} selectedCity={selectedCity} onSelectCity={onSelectCity} />
    </Map>
  );
}

export default memo(MapViewportAnimation);
