"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapComponent() {
  return (
    <MapContainer
      center={[25.276987, 55.296249]}
      zoom={10}
      style={{ height: "100%", width: "100%" }}
      className="z-0"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[25.3463, 55.4209]} icon={customIcon}>
        <Popup>
          <div className="font-bold text-dark">Sharjah</div>
          <div className="text-sm text-gray-600">Main service area</div>
        </Popup>
      </Marker>

      <Marker position={[25.2048, 55.2708]} icon={customIcon}>
        <Popup>
          <div className="font-bold text-dark">Dubai</div>
          <div className="text-sm text-gray-600">Main service area</div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}