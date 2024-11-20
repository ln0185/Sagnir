import React from "react";
import MapPage from "../src/assets/pages/MapPage"; // Adjust the path if necessary
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./index.css"
import "./output.css"
import { StoriesPage } from './assets/pages/StoriesPage'

function App() {
  const [count, setCount] = useState(0)

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <MapPage />
    </div>
  );
};
    <>
     <StoriesPage />
    </>
  )
}

export default App;
