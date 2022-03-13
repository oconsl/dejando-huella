import { useMemo, useRef, useState, useEffect } from 'react';
import { Marker, Popup, Circle } from 'react-leaflet';
import axios from 'axios';

const DraggableMarker = ({center, icon}) => {
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
    axios
      .get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.lat}&lon=${position.lng}&zoom=16`)
      .then(response => setStreet(response.data.address.road))
  },);

  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={position}
      icon={icon}
      ref={markerRef}>
      <Popup minWidth={90}>
        {`${street}`}
      </Popup>
      <Circle center={position} radius={1000}/>
    </Marker>
  );
};

export default DraggableMarker;
