import React, { useEffect, useState } from "react";
import searchIcon from "../../assets/resources/search icon dark mode.svg";
import crossIcon from "../../assets/resources/cross dark mode.svg";
import { StoriesCard } from "../StoriesCard/StoriesCard";

interface StoryInterface {
  category: string;
  stories: Record<string, string>;
}
interface SearchbarProps {
  isSearchOpen: boolean;
  setIsSearchOpen: (value: boolean) => void;
}

export const Searchbar: React.FC<SearchbarProps> = ({
  isSearchOpen,
  setIsSearchOpen,
}) => {
  const [searchedStory, setSearchedStory] = useState<string>("");
  const [searchedStories, setSearchedStories] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<string[]>([]);

  const searchStories = [
    "Álfadrottning í álögum",
    "Álfafólkið í Loðmundarfirði",
    "Álfakóngurinn í Seley",
    "Ábæjar-Skotta",
    "Átján draugar úr Blöndu",
    "Átján sendingar í senn",
    "Átján Skólabræður",
    "Andrarímur og Hallgrímsrímur",
    "Bergþór Bláfellingur",
    "Bakkastaður",
    "Brytinn í Skálholti",
    "Dansinn í Hruna",
  ];

  useEffect(() => {
    const getSearchedStories = async () => {
      const res = await fetch(`https://m4groupproject.onrender.com/all`);
      const data = await res.json();

      const allStories = data?.flatMap((item: StoryInterface) => {
        const combinedStories = Object.values(item.stories.stories);
        console.log("Stories", combinedStories);
        return combinedStories.map((story) => story);
      });

      //Filters the stories to the category stories
      const filteredStories = allStories.filter((story: string) =>
        searchStories.includes(story)
      );

      console.log("filtered stories", filteredStories);

      setSearchedStories(filteredStories);
    };

    getSearchedStories();
  }, []);

  useEffect(() => {
    console.log("All stories", searchedStories);

    if (!searchedStories.length) {
      setSearchResult([]);
      return;
    }

    if (searchedStory.trim() === "") {
      setSearchResult([]);
      return;
    }

    const filteredStories = searchedStories.filter((word: string) =>
      word.toLowerCase().includes(searchedStory.toLowerCase())
    );

    setSearchResult(filteredStories);
  }, [searchedStories, searchedStory]);

  return (
    <div
      className={`fixed inset-0 bg-sagnir-100 bg-opacity-50 z-50 transition-opacity duration-300 ${
        isSearchOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Search Bar container */}
      <div className="absolute bottom-12 inset-x-4 mb-2 md:inset-x-96 w-[350px] md:w-[465px]  bg-sagnir-100 p-4 rounded-md shadow-lg flex items-center space-x-3">
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
            className="bg-sagnir-100 text-sagnir-200 font-glare px-10 py-2 rounded-md w-full border border-sagnir-200 focus:outline-none focus:ring-2 focus:ring-sagnir-300"
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
      <div className="absolute bottom-24 left-4 right-4 mb-2 -z-10 md:left-96 md:right-96 w-[350px] md:w-[465px] text-sagnir-200 bg-sagnir-100 rounded-lg shadow-md p-4 font-glare">
        {/* Replace with actual search results */}
        {searchResult && searchResult.length ? (
          <StoriesCard
            data={{ category: "", stories: searchResult }}
            categoryName={"all"}
          />
        ) : null}
      </div>
    </div>
  );
};
