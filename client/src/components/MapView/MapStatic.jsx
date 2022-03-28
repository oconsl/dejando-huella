// LEAFLET
import { MapContainer, TileLayer } from 'react-leaflet';
import { Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// MATERIAL UI
import { Box, IconButton, DialogContent } from '@mui/material/Box';
// MATERIAL ICONS
import CloseIcon from '@mui/icons-material/Close';
// UTILS
import LocationIcon from './utils/LocationIcon';
// STYLES
import styles from './styles';

const MapView = ({ position, closeMap }) => {
  const center = { lat: -26.829901, lng: -65.203667 };
  const zoom = 15.5;

  return (
    <>
      <DialogContent>
        {/* <IconButton
          aria-label='close'
          sx={{
            position: 'absolute',
            right: 20,
            transform: 'scale(1.5)',
          }}
          onClick={closeMap}
        >
          <CloseIcon />
        </IconButton> */}
        <Box sx={styles.box}>
          <MapContainer
            center={position}
            zoom={zoom}
            style={{ height: 400, width: 400 }}
            dragging={false}
            doubleClickZoom={false}
            scrollWheelZoom={false}
            attributionControl={false}
            zoomControl={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker
              draggable={false}
              center={position}
              position={position}
              icon={LocationIcon}
            />
          </MapContainer>
        </Box>
      </DialogContent>
    </>
  );
};

export default MapView;
