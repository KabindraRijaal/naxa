import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  LayersControl,
  ImageOverlay,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import "leaflet.vectorgrid";

const { Overlay } = LayersControl;

const VectorTileLayer = ({ url }) => {
  const map = useMap();

  useEffect(() => {
    const vectorTileLayer = L.vectorGrid.protobuf(url, {
      vectorTileLayerStyles: {
        // You can define styles here if needed
        default: {
          weight: 1,
          color: "#000000",
          fillColor: "#ffffff",
          fillOpacity: 0.5,
          fill: true,
          opacity: 1,
        },
      },
    });

    map.addLayer(vectorTileLayer);

    return () => {
      map.removeLayer(vectorTileLayer);
    };
  }, [url, map]);

  return null;
};

const MapComponent = () => {

  const layerUrls = {
    province:
      "https://vectortile.naxa.com.np/federal/province.mvt/?tile={z}/{x}/{y}",
    district:
      "https://vectortile.naxa.com.np/federal/district.mvt/?tile={z}/{x}/{y}",
    municipality:
      "https://vectortile.naxa.com.np/federal/municipality.mvt/?tile={z}/{x}/{y}",
  };

  return (
    <div>      
      <MapContainer
        center={[27.7, 85.3]} // Centered over Nepal
        zoom={7}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <LayersControl position="topright">
          <LayersControl.Overlay name="teehe">
            <VectorTileLayer url={layerUrls.province} />
          </LayersControl.Overlay>
          <Overlay checked name="provience">
            <VectorTileLayer url={layerUrls.province} />
          </Overlay>
          <Overlay name="district">
            <VectorTileLayer url={layerUrls.district} />
          </Overlay>
          <Overlay name="municipality">
            <VectorTileLayer url={layerUrls.municipality} />
          </Overlay>
        </LayersControl>
      </MapContainer>
      {layerUrls.province}
    </div>
  );
};

export default MapComponent;
