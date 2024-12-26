import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import "./map.scss"
import Pin from "../pin/Pin";

export default function Map({items}){
  return (
    <MapContainer center={
      items.length === 1
        ? [items[0].latitude, items[0].longitude]
        : [28.7041, 77.1025]
    } zoom={6} scrollWheelZoom={false} className="map" >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {items.map(item => (
      <Pin item={item} key={item.id} />
    ))}
  </MapContainer>
  );
}
// New Delhi - 28.6139, 77.2090
// 51.505, -0.09