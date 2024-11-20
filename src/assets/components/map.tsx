import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapInstance.current) return; // Prevent multiple map initializations

    // Initialize Leaflet map
    mapInstance.current = L.map(mapContainer.current!, {
      center: [64.1355, -21.8954], // Reykjavik's coordinates
      zoom: 13, // Initial zoom level
    });

    // Add a monochrome tile layer
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
      }
    ).addTo(mapInstance.current);

    // Add a marker at Reykjavik
    const marker = L.marker([64.1355, -21.8954]).addTo(mapInstance.current);
    marker.bindPopup("<b>Reykjavik</b><br>Click me for more info.");

    return () => {
      mapInstance.current?.remove(); // Clean up on unmount
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      className="w-full h-96 rounded-lg border-2 border-gray-300 shadow-lg"
    />
  );
};

export default Map;
