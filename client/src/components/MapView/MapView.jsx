// MATERIAL UI
import {
  Box,
  IconButton,
  Button,
  DialogContent,
  DialogActions,
  DialogTitle,
} from '@mui/material';
// MATERIAL ICONS
import CloseIcon from '@mui/icons-material/Close';
// LEAFLET
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// UTILS
import LocationIcon from './utils/LocationIcon';
import DraggableMarker from './utils/DraggableMarker';
// STYLES
import styles from './styles';

const MapView = ({ saveLocation, closeMap, saveAddress }) => {
  const center = { lat: -26.829901, lng: -65.203667 };
  const zoom = 13;

  return (
    <>
      <DialogContent>
        <DialogTitle sx={styles.dialogTitle}>
          Move the marker
          <IconButton
            aria-label='close'
            sx={styles.iconButton}
            onClick={closeMap}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Box sx={styles.box}>
          <MapContainer
            center={center}
            zoom={zoom}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <DraggableMarker
              center={center}
              icon={LocationIcon}
              saveMarkerLocation={saveLocation}
              saveAddress={saveAddress}
            />
          </MapContainer>
        </Box>
        <DialogActions>
          <Button
            autoFocus
            sx={styles.button}
            variant='contained'
            onClick={closeMap}
          >
            Save Location
          </Button>
        </DialogActions>
      </DialogContent>
    </>
  );
};

export default MapView;
