import React, { useState } from "react";
import { Link } from "react-router-dom";
import StoriesIcon from "../../assets/resources/book dark mode.svg";
import StoriesIconActive from "../../assets/resources/book active dark mode.svg";
import SearchIcon from "../../assets/resources/search icon dark mode.svg";
import LocationIcon from "../../assets/resources/location dark mode.svg";
import LocationIconActive from "../../assets/resources/location active dark mode.svg";
import QuizIcon from "../../assets/resources/quiz icon dark mode.svg";
import QuizIconActive from "../../assets/resources/quiz icon active dark mode.svg";
import { Searchbar } from "../../components/SearchStory/Searchbar";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("StoriesPage");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  return (
    <>
      {/* Overlay Searchbar */}
      <Searchbar
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />

      <nav className="w-full bg-sagnir-100 fixed bottom-0 border-t border-s-sagnir-200">
        <ul className="flex justify-around items-center py-4">
          {/* Stories Icon */}
          <li onClick={() => setActive("StoriesPage")}>
            <Link to="/stories">
              <img
                src={active === "StoriesPage" ? StoriesIconActive : StoriesIcon}
                alt="StoriesPage"
                className="h-7 w-7"
              />
            </Link>
          </li>

          {/* Search Icon */}
          <li
            onClick={() => {
              setActive("SearchPage");
              setIsSearchOpen(true); // Open the search bar overlay
            }}
          >
            <img
              src={SearchIcon}
              alt="Search"
              className="h-6 w-6 cursor-pointer"
            />
          </li>

          {/* Location Icon */}
          <li onClick={() => setActive("MapPage")}>
            <Link to="/map">
              <img
                src={active === "MapPage" ? LocationIconActive : LocationIcon}
                alt="MapPage"
                className="h-6 w-6"
              />
            </Link>
          </li>

          {/* Quiz Icon */}
          <li onClick={() => setActive("QuizPage")}>
            <Link to="/quiz">
              <img
                src={active === "QuizPage" ? QuizIconActive : QuizIcon}
                alt="quizpage"
                className="h-7 w-7"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
