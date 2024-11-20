import React from "react";
import Map from "../components/map";

const MapPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h1 className="text-3xl font-bold text-center">Reykjavik Map</h1>
      <p className="text-gray-600 text-center">
        Explore Reykjavik with this interactive map.
      </p>
      <Map />
    </div>
  );
};

export default MapPage;
