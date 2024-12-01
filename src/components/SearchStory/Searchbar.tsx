import React, { useState } from "react";
import { StoriesCard } from "../StoriesCard/StoriesCard"; // Import StoriesCard

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
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
        isSearchOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Search Bar container */}
      <div className="absolute bottom-16 inset-x-18 md:inset-x-96 w-[400px] h-30 bg-sagnir-100 p-6 rounded-md shadow-lg">
        {/* Close button inside the search bar */}
        <button
          onClick={() => setIsSearchOpen(false)}
          className="absolute top-0.5 right-1 text-sagnir-200"
        >
          Close
        </button>

        {/* Search Input */}
        <input
          className="border-solid border-2 border-sagnir-200 p-2 rounded-md w-full text-sagnir-100 mt-2"
          type="text"
          placeholder="Search..."
          value={searchedStory}
          onChange={(e) => setSearchedStory(e.target.value)}
        />

        {/* Render search results */}
        <div className="mt-4 text-sagnir-200">
          {/* Add the logic to display search results */}
          <StoriesCard data={[]} /> {/* Replace with actual search results */}
        </div>
      </div>
    </div>
  );
};
