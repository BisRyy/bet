import PropTypes from 'prop-types';
import { NavigationControl, FullscreenControl, ScaleControl, GeolocateControl } from 'react-map-gl';
//
import { StyledMapControls } from './styles';

// ----------------------------------------------------------------------

MapControl.propTypes = {
  hideScaleControl: PropTypes.bool,
  hideGeolocateControl: PropTypes.bool,
  hideFullscreenControl: PropTypes.bool,
  hideNavigationnControl: PropTypes.bool,
};

export default function MapControl({
  hideScaleControl,
  hideGeolocateControl,
  hideFullscreenControl,
  hideNavigationnControl,
}) {
  return (
    <>
      <StyledMapControls />

      {!hideGeolocateControl && (
        <GeolocateControl position="top-left" positionOptions={{ enableHighAccuracy: true }} />
      )}

      {!hideFullscreenControl && <FullscreenControl position="top-left" />}

      {!hideScaleControl && <ScaleControl position="bottom-left" />}

      {!hideNavigationnControl && <NavigationControl position="bottom-left" />}
    </>
  );
}
