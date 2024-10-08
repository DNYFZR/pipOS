import "./Map.css";
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

interface Props {
  center: [number, number];
  zoom: number;
}

const MapComponent: React.FC<Props> = ({ center, zoom }) => {
  return (
    <>
      <MapContainer center={center} zoom={zoom} className="map-container">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      </MapContainer>
    </>
  );
};

export default MapComponent;