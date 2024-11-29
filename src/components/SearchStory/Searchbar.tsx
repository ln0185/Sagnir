import { useEffect, useState } from "react";
import { StoriesCard } from "../StoriesCard/StoriesCard";


interface StoryInterface {
  [key: string]: string;
}

interface StoriesArrayInterface {
  category: string,
  stories: StoryInterface
}

export const Searchbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchedStory, setSearchedStory] = useState<string>("");
  const [searchResult, setSearchResult] = useState("");
  const [allStories, setAllStories] = useState([]);
  const [searchedStories, setSearchedStories] = useState<string[]>([]);
  const [searchedCategoryStory, setSearchedCategoryStory] = useState<string[]>([]);

  useEffect(() => {
    setSearchedStory("");
    setSearchedCategoryStory([]);
  }, []);

  useEffect(() => {
    const searchDelayDebounce = setTimeout(() => {
      if (searchedStory != "") {
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
        return allTheStories
      });
      setAllStories(stories.flat());
    };
    getStoriesData();
  }, [searchResult]);

  useEffect(() => {
    let searchStories: string[] = allStories.map((item) => {
      let storiesArray = Object.values(item);
  
      return storiesArray.map((story) => story);
    });
  
    searchStories = searchStories.flat();
    
    setSearchedStories(searchStories);
  
  }, [allStories]);

  useEffect(() => {
    let allStories = [...searchedStories]

    if (!searchedStory) {
      setSearchedCategoryStory([]);
      return;
    }

    const filteredStories = allStories.filter((story: string) =>
      story.toLowerCase().includes(searchedStory.toLowerCase())
    );
    setSearchedCategoryStory(filteredStories);
  }, [searchedStories, searchedStory])

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
              {searchedCategoryStory ? <StoriesCard data={searchedCategoryStory}/> : null}
            </div>
        </>
      ) : null}
      {/*Temp button for testing  */}
      <button onClick={() => setIsSearchOpen((prev) => !prev)}>
        Open Search
      </button>
    </section>
  );
};
