import React, { useEffect, useState } from "react";
import { StoriesCard } from "../StoriesCard/StoriesCard";

interface StoryInterface {
  [key: string]: string;
}

interface StoriesArrayInterface {
  category: string;
  stories: StoryInterface;
}

interface SearchbarProps {
  isSearchOpen: boolean;
  setIsSearchOpen: (value: boolean) => void;
}

export const Searchbar: React.FC<SearchbarProps> = ({
  isSearchOpen,
  setIsSearchOpen,
}) => {
  const [searchedStory, setSearchedStory] = useState<string>(""); // User input
  const [allStories, setAllStories] = useState<string[]>([]); // All fetched stories
  const [filteredStories, setFilteredStories] = useState<string[]>([]); // Filtered stories

  // Fetch stories from API
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await fetch("https://m4groupproject.onrender.com/all");
        const data: StoriesArrayInterface[] = await res.json();

        // Flatten stories into an array of strings
        const stories = data.flatMap((item) => Object.values(item.stories));

        setAllStories(stories);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };

    fetchStories();
  }, []);

  // Filter stories based on user input
  useEffect(() => {
    if (!searchedStory.trim()) {
      setFilteredStories([]);
      return;
    }

    const lowerCasedQuery = searchedStory.toLowerCase();
    const results = allStories.filter((story) =>
      story.toLowerCase().includes(lowerCasedQuery)
    );

    setFilteredStories(results);
  }, [searchedStory, allStories]);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center transition-opacity duration-300 ${
        isSearchOpen ? "opacity-100 z-50" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setIsSearchOpen(false)}
        className="absolute top-4 right-4 text-white"
      >
        Close
      </button>
      <div className="bg-white p-6 rounded-md shadow-lg w-11/12 max-w-lg">
        <input
          className="border border-gray-300 p-2 rounded-md w-full"
          type="text"
          placeholder="Search stories..."
          value={searchedStory}
          onChange={(e) => setSearchedStory(e.target.value)}
        />
        <div className="mt-4">
          {filteredStories.length > 0 ? (
            <StoriesCard data={filteredStories} />
          ) : (
            <p className="text-gray-500">
              {searchedStory.trim()
                ? "No results found."
                : "Start typing to search."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
