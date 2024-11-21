import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QuizPage } from "./pages/QuizPage";

function App() {
  return (
    <Router>
      {/* Temporary Navigation */}
      <div className="p-4 bg-gray-800 text-white">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/quiz">Quiz</Link>
      </div>

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={<div className="text-center p-6">Home Page</div>}
        />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </Router>
  );
}

export default App;
