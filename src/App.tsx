import React from "react";
import MapPage from "../src/assets/pages/MapPage"; // Adjust the path if necessary

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <MapPage />
    </div>
  );
};

export default App;
