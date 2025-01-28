import NavBar from "./components/navbar/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route path="/" element={<StoriesPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route
            path="/stories/:categoryName/:storyName"
            element={<SingleStoryPage />}
          />
          <Route
            path="/search"
            element={
              <Searchbar isSearchOpen={false} setIsSearchOpen={() => {}} />
            }
          />
          <Route path="/map" element={<MapPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
