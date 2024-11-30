import { useEffect, useState } from "react";
import { StoriesCard } from "../StoriesCard/StoriesCard";

export const Searchbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchedStory, setSearchedStory] = useState<string>("");
  const [allStories, setAllStories] = useState<any[]>([]);
  const [filteredStories, setFilteredStories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Fetch all stories when the component mounts
  useEffect(() => {
    const getAllStories = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:8080/all"); // Replace with your actual server URL
        const data = await response.json();
        console.log("Fetched stories:", data); // Log the fetched data to inspect its structure

        setAllStories(data);
        setFilteredStories(data); // Initially show all stories
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
      setIsLoading(false);
    };

    getAllStories();
  }, []);

  // Handle search input changes
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchedStory(query);

    console.log("Search term:", query); // Log the search term

    // If there's no search term, reset to show all stories
    if (query === "") {
      setFilteredStories(allStories);
      return;
    }

    // Filter categories and stories based on search term
    const result = allStories
      .map((category: any) => {
        // Log category structure to ensure it's correct
        console.log("Category structure:", category);

        // Check if category has stories and if it matches the search term
        const filteredStoriesInCategory = category.stories.filter(
          (story: any) => {
            console.log("Checking story:", story); // Log each story
            return story.title.toLowerCase().includes(query); // Ensure filtering based on the title field
          }
        );

        return {
          ...category,
          stories: filteredStoriesInCategory,
        };
      })
      .filter((category: any) => category.stories.length > 0); // Only keep categories with matching stories

    console.log("Filtered result:", result); // Log the filtered result to see if it matches the query

    setFilteredStories(result);
  };

  return (
    <section className="flex flex-col gap-2">
      {/* Search bar only shows if isSearchOpen is true */}
      {isSearchOpen && (
        <>
          <div className="bg-slate-900 flex flex-col items-center mx-7">
            <input
              className="border-solid border-2 border-indigo-600"
              type="text"
              placeholder="Search stories..."
              value={searchedStory}
              onChange={handleSearch}
              autoFocus // Automatically focus on the search bar when it's open
            />
          </div>

          {/* Conditional rendering for filtered stories */}
          <div className="flex flex-col text-center bg-slate-900 mx-7">
            {isLoading ? (
              <p>Loading...</p>
            ) : filteredStories.length === 0 ? (
              // Show message if no results are found
              <p>No stories found matching your search.</p>
            ) : (
              <StoriesCard data={filteredStories} categoryName="all" />
            )}
          </div>
        </>
      )}

      {/* Button to toggle search bar visibility */}
      <button onClick={() => setIsSearchOpen(true)}>Open Search</button>
    </section>
  );
};
