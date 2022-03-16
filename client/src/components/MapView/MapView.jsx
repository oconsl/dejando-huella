import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Box from '@mui/material/Box';
import LocationIcon from './utils/LocationIcon';
import DraggableMarker from './utils/DraggableMarker';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';

const MapView = ({ saveLocation, closeMap, saveAddress }) => {
  const center = { lat: -26.829901, lng: -65.203667 };
  const zoom = 13;

  return (
    <>
      <DialogContent>
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Move the marker
          <IconButton
            aria-label='close'
            sx={{
              position: 'absolute',
              right: 20,
              transform: 'scale(1.5)',
            }}
            onClick={closeMap}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
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
            sx={{ margin: 'auto' }}
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
