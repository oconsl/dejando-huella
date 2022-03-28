import { useMemo, useRef, useState, useEffect } from 'react';
// LEAFLET
import { Marker, Popup, Circle } from 'react-leaflet';
// SERVICES
import axios from 'axios';

const DraggableMarker = ({ center, icon, saveMarkerLocation, saveAddress }) => {
  const [position, setPosition] = useState(center);
  const [street, setStreet] = useState('');
  const markerRef = useRef(null);

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );

  useEffect(() => {
    saveMarkerLocation(position);
  }, [position, saveMarkerLocation]);

  useEffect(() => {
    let street = '';
    
    axios
      .get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.lat}&lon=${position.lng}&zoom=16`
      )
      .then((response) => {
        street = response.data.address.road;
        console.log(street);
        saveAddress(street);
        setStreet(street);
      });      
  },[position, saveAddress]);

  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={position}
      icon={icon}
      ref={markerRef}
    >
      <Popup minWidth={90}>{`${street}`}</Popup>
      <Circle center={position} radius={1000} />
    </Marker>
  );
};

export default DraggableMarker;
