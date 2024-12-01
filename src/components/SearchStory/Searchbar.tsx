import React, { useState } from "react";
import searchIcon from "../../assets/resources/search icon dark mode.svg";
import crossIcon from "../../assets/resources/cross dark mode.svg";
import { StoriesCard } from "../StoriesCard/StoriesCard";

interface SearchbarProps {
  isSearchOpen: boolean;
  setIsSearchOpen: (value: boolean) => void;
}

export const Searchbar: React.FC<SearchbarProps> = ({
  isSearchOpen,
  setIsSearchOpen,
}) => {
  const [searchedStory, setSearchedStory] = useState<string>("");

  return (
    <div
      className={`fixed inset-0 bg-sagnir-100 bg-opacity-50 z-50 transition-opacity duration-300 ${
        isSearchOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Search Bar container */}
      <div className="absolute bottom-24 inset-x-18 md:inset-x-96 w-[400px] bg-sagnir-100 p-4 rounded-md shadow-lg flex items-center space-x-3">
        {/* Search Input with Icons */}
        <div className="relative flex items-center w-full">
          {/* Search Icon */}
          <img
            src={searchIcon}
            alt="Search Icon"
            className="absolute left-3 h-5 w-5"
          />

          {/* Input Field */}
          <input
            className="bg-sagnir-100 text-sagnir-200 font-glare pl-10 pr-10 py-2 rounded-md w-full border border-sagnir-200 focus:outline-none focus:ring-2 focus:ring-sagnir-300"
            type="text"
            placeholder="Search..."
            value={searchedStory}
            onChange={(e) => setSearchedStory(e.target.value)}
          />

          {/* Close Icon */}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute right-3"
          >
            <img src={crossIcon} alt="Close Icon" className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Render search results */}
      <div className="absolute bottom-14 left-4 right-4 md:left-96 md:right-96 w-[400px] text-sagnir-200 bg-sagnir-100 rounded-md shadow-md p-4 font-glare">
        {/* Replace with actual search results */}
        <StoriesCard data={{ category: "", stories: {} }} categoryName={""} />
      </div>
    </div>
  );
};
