import { useEffect, useState } from "react";
import { StoriesCard } from "../StoriesCard/StoriesCard";

interface StoriesInterface {
  category: string;
}

export const Searchbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchedStory, setSearchedStory] = useState<string>("");
  const [searchResult, setSearchResult] = useState("");
  const [allStories, setAllStories] = useState([]);
  const [searchedStories, setSearchedStories] = useState([]);
  const [searchedCategoryStory, setSearchedCategoryStory] = useState([]);

  useEffect(() => {
    setSearchedStory("");
  }, []);

  useEffect(() => {
    const searchDelayDebounce = setTimeout(() => {
      console.log(searchedStory);
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
      // console.log("Searchbar Items", data);
      const stories = data?.map((item: StoriesInterface) => {
        
        let allStories = item.stories;
        console.log("Searchbar items", allStories);
        let allTheStories = Object.values(allStories);
        // console.log("All stories", allTheStories);
        return allTheStories
      });
      setAllStories(stories.flat());
    };
    getStoriesData();
  }, [searchResult]);

  useEffect(() => {
    console.log("Searched stories", allStories);
  
    let searchStories = allStories.map((item) => {
      let storiesArray = Object.values(item);
  
      return storiesArray.map((story) => story);
    });
  
    searchStories = searchStories.flat();
    setSearchedStories(searchStories);
  
  }, [allStories]);

  useEffect(() => {
    let allStories = [...searchedStories]
    console.log(allStories);
    let searchResult = allStories.filter((word) => word == searchedStory);
    console.log(searchResult);
    setSearchedCategoryStory(searchResult);
  }, [searchedStories, searchedStory])

  return (
    <>
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
          <div className="flex items-center bg-slate-900 mx-7">
              <p className="text-white">{searchedCategoryStory ? searchedCategoryStory : null}</p>
            </div>
        </>
      ) : null}
      {/*Temp button for testing  */}
      <button onClick={() => setIsSearchOpen((prev) => !prev)}>
        Open Search
      </button>
    </>
  );
};
