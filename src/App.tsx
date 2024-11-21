import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "./output.css";
import { StoriesPage } from "./pages/StoriesPage";
import { MapPage } from "./pages/MapPage";
import { QuizPage } from "./pages/QuizPage";

function App() {
  return (
    <div className="h-full relative">
      <Router>
        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<StoriesPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
        {/* Fixed Navbar */}
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
