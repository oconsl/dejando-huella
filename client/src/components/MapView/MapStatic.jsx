// LEAFLET
import { MapContainer, TileLayer } from 'react-leaflet';
import { Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// MATERIAL UI
import { Box, DialogContent } from '@mui/material';
// UTILS
import LocationIcon from './utils/LocationIcon';
// STYLES
import { styles_static } from './styles';

const MapView = ({ position }) => {
  const zoom = 15.5;

  return (
    <>
      <DialogContent sx={styles_static.dialogContent}>
        <Box sx={styles_static.box}>
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
