import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import LocationIcon from './utils/LocationIcon';
import DraggableMarker from './utils/DraggableMarker';

const MapView = () => {
  const center = { lat: -26.829901, lng: -65.203667 };
  const zoom = 13;

  return (
    <Container component='main' sx={{ display: 'flex' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '80vw',
          height: '80vh',
          mt: 3,
          mb: 3,
        }}
      >
        <MapContainer
          center={center}
          zoom={zoom}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <DraggableMarker center={center} icon={LocationIcon}/>
        </MapContainer>
      </Box>
    </Container>
  );
};

export default MapView;
