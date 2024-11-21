import React, { useState } from "react";
import { Link } from "react-router-dom";
import StoriesIcon from "../assets/resources/book dark mode.svg";
import StoriesIconActive from "../assets/resources/book active dark mode.svg";
import SearchIcon from "../assets/resources/search icon dark mode.svg";
import LocationIcon from "../assets/resources/location dark mode.svg";
import LocationIconActive from "../assets/resources/location active dark mode.svg";
import QuizIcon from "../assets/resources/quiz icon dark mode.svg";
import QuizIconActive from "../assets/resources/quiz icon active dark mode.svg";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("StoriesPage");
  return (
    <nav className="w-full h-22 bg-black fixed bottom-0">
      <ul className="flex justify-around items-center py-4">
        {/* Stories Icon */}
        <li onClick={() => setActive("StoriesPage")}>
          <Link to="/stories">
            <img
              src={active === "StoriesPage" ? StoriesIconActive : StoriesIcon}
              alt="StoriesPage"
              className="h-8 w-8"
            />
          </Link>
        </li>

        {/* Search Icon */}
        <li>
          <img src={SearchIcon} alt="Search" className="h-8 w-8" />
        </li>

        {/* Location Icon */}
        <li onClick={() => setActive("MapPage")}>
          <Link to="/map">
            <img
              src={active === "MapPage" ? LocationIconActive : LocationIcon}
              alt="MapPage"
              className="h-8 w-8"
            />
          </Link>
        </li>

        {/* Quiz Icon */}
        <li onClick={() => setActive("QuizPage")}>
          <Link to="/quiz">
            <img
              src={active === "QuizPage" ? QuizIconActive : QuizIcon}
              alt="quizpage"
              className="h-8 w-8"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
