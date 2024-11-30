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
      const response = await fetch("http://localhost:8080/all"); // Replace with your actual server URL
      const data = await response.json();
      setAllStories(data);
      setFilteredStories(data); // Initially show all stories
      setIsLoading(false);
    };

    getAllStories();
  }, []);

  // Handle search input changes
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchedStory(query);

    // If there's no search term, reset to show all stories
    if (query === "") {
      setFilteredStories(allStories);
      return;
    }

    // Filter categories and stories based on search term
    const result = allStories
      .map((category: any) => ({
        ...category,
        stories: category.stories.filter((story: string) =>
          story.toLowerCase().includes(query)
        ),
      }))
      .filter((category: any) => category.stories.length > 0); // Only keep categories that have matching stories

    setFilteredStories(result);
  };

  return (
    <section className="flex flex-col gap-2">
      {isSearchOpen && (
        <>
          <div className="bg-slate-900 flex flex-col items-center mx-7">
            <input
              className="border-solid border-2 border-indigo-600"
              type="text"
              placeholder="Search stories..."
              value={searchedStory}
              onChange={handleSearch}
            />
          </div>
          <div className="flex flex-col text-center bg-slate-900 mx-7">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <StoriesCard data={filteredStories} categoryName="all" />
            )}
          </div>
        </>
      )}

      <button onClick={() => setIsSearchOpen((prev) => !prev)}>
        Open Search
      </button>
    </section>
  );
};
