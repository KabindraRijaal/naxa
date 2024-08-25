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

declare module 'leaflet' {
  namespace vectorGrid {
    function protobuf(url: string, options?: any): L.Layer;
  }
}

const VectorTileLayer = ({ url }: { url: string }) => {
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

  const [activeLayer, setActiveLayer] =
    useState<keyof typeof layerUrls>("province");

  return (
    <div className="container mx-auto max-w-[1270px] mt-28 mb-28">
      <div className="flex justify-end mb-2">
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveLayer("province")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium text-sm py-2 px-3 rounded transition duration-300 ease-in-out"
          >
            Province Layer
          </button>
          <button
            onClick={() => setActiveLayer("district")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium text-sm py-2 px-3 rounded transition duration-300 ease-in-out"
          >
            District Layer
          </button>
          <button
            onClick={() => setActiveLayer("municipality")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium text-sm py-2 px-3 rounded transition duration-300 ease-in-out"
          >
            Municipality Layer
          </button>
        </div>
      </div>
      <MapContainer
        center={[27.7, 85.3]} // Centered over Nepal
        zoom={7}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <VectorTileLayer url={layerUrls[activeLayer]} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
