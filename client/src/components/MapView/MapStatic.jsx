import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Box from '@mui/material/Box';
import LocationIcon from './utils/LocationIcon';
import DialogContent from '@mui/material/DialogContent';
import { Marker } from 'react-leaflet';

const MapView = ({position}) => {
  const center = { lat: -26.829901, lng: -65.203667 };
  const zoom = 15.5;

  return (
    <>
      <DialogContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '50vh',
          }}
        >
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
