import { useEffect, useState } from "react";
import { StoriesCard } from "../StoriesCard/StoriesCard";

interface StoryInterface {
  [key: string]: string;
}

interface StoriesArrayInterface {
  category: string;
  stories: StoryInterface;
}

export const Searchbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchedStory, setSearchedStory] = useState<string>("");
  const [searchResult, setSearchResult] = useState("");
  const [allStories, setAllStories] = useState<string[]>([]); // Declare as string[] to hold flat array
  const [searchedStories, setSearchedStories] = useState<string[]>([]);
  const [searchedCategoryStory, setSearchedCategoryStory] = useState<{
    category: string;
    stories: Record<string, string>;
  } | null>(null); // We will store the search results in this format

  useEffect(() => {
    setSearchedStory("");
    setSearchedCategoryStory(null); // Reset the search results
  }, []);

  useEffect(() => {
    const searchDelayDebounce = setTimeout(() => {
      if (searchedStory !== "") {
        setSearchResult(searchedStory.toLowerCase());
      }
    }, 1500);

    return () => clearTimeout(searchDelayDebounce);
  }, [searchedStory]);

  useEffect(() => {
    const getStoriesData = async () => {
      const res = await fetch("https://m4groupproject.onrender.com/all");
      const data = await res.json();
      const stories = data?.map((item: StoriesArrayInterface) => {
        let allStories = item.stories;
        let allTheStories = Object.values(allStories);
        return allTheStories; // This returns an array of arrays
      });
      setAllStories(stories.flat()); // Flatten the nested arrays to get a single array of strings
    };
    getStoriesData();
  }, [searchResult]);

  useEffect(() => {
    let searchStories: string[] = allStories.map((item) => {
      return item;
    });

    searchStories = searchStories.flat(); // Ensure it's flat (if needed)

    console.log("Items", searchStories);
    setSearchedStories(searchStories);
  }, [allStories]);

  useEffect(() => {
    if (!searchedStory) {
      setSearchedCategoryStory(null); // Reset when no search term is entered
      return;
    }

    const filteredStories = searchedStories.filter((story: string) =>
      story.toLowerCase().includes(searchedStory.toLowerCase())
    );

    // Convert the filtered stories array to Record<string, string>
    const storiesRecord: Record<string, string> = filteredStories.reduce(
      (acc: Record<string, string>, story, index) => {
        acc[`story_${index + 1}`] = story; // Assign a unique key for each story
        return acc;
      },
      {} as Record<string, string> // Explicitly declare the type of the accumulator
    );

    setSearchedCategoryStory({
      category: "Search Results", // Set a category name for the search results
      stories: storiesRecord, // Pass the converted Record<string, string>
    });
  }, [searchedStories, searchedStory]);

  return (
    <section className="flex flex-col gap-2">
      {isSearchOpen ? (
        <>
          <div className="bg-slate-900 flex flex-col items-center mx-7">
            <input
              className="border-solid border-2 border-indigo-600"
              onChange={(e) => setSearchedStory(e.target.value)}
              type="text"
              name="searchbar"
              id="searchbar"
            />
          </div>
          <div className="flex flex-col text-center bg-slate-900 mx-7">
            {searchedCategoryStory ? (
              <StoriesCard
                data={searchedCategoryStory} // Now passing the correct format
                categoryName="searchResults" // You can set the category name here as needed
              />
            ) : null}
          </div>
        </>
      ) : null}
      {/* Temp button for testing */}
      <button onClick={() => setIsSearchOpen((prev) => !prev)}>
        Open Search
      </button>
    </section>
  );
};
