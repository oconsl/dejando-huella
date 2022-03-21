import L from 'leaflet';
import Icon from '../assets/location.svg';

const LocationIcon = L.icon({
  iconUrl: Icon,
  iconRetinaUrl: Icon,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: 'leaflet-venue-icon',
});

export default LocationIcon;
