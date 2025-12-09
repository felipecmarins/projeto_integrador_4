import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import L from 'leaflet';
import './SolarPin.css'; // Importando o estilo do pin

// Criando o ícone de sol
const solarIcon = new L.divIcon({
  className: 'solar-pin',
  iconSize: [20, 20],
});

export default function Map({ markers }) {
  const center = [-15.794229, -47.882166]; // Centralizando no Brasil

  return (
    <MapContainer center={center} zoom={4} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers && markers.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={solarIcon}>
          <Popup>
            <b>{marker.name}</b>
            <br />
            Preço do kWh: R$ {marker.price}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
