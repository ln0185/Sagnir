import NavBar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "./output.css";
import { StoriesPage } from "./pages/StoriesPage";
import { Searchbar } from "./components/SearchStory/Searchbar";
import { MapPage } from "./pages/MapPage";
import { QuizPage } from "./pages/QuizPage";
import { SingleStoryPage } from "./pages/SingleStoryPage";

function App() {
  return (
    <div className="h-full relative">
      <Router>
        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<StoriesPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/stories/:categoryName/:storyName" element={<SingleStoryPage />}/>
          <Route path="/search" element={<Searchbar />} />
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
