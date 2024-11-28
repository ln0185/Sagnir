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
    console.log(searchedStories);
  }, [searchedStories])

  // useEffect(() => {
  //   allStories.map((item) => {
  //     const filteredStories = (arr, query: string) => {
  //       return arr.filter((el) => el.includes(query));
  //     };

  //     let stories = filteredStories(item, searchResult);

  //     if (stories.length <= 0) {
  //       stories.push("No stories found");
  //     }

  //     setSearchedStories(stories);
  //   });
  // }, [allStories, searchResult]);

  return (
    <>
      {isSearchOpen ? (
        <>
          <div className="bg-slate-900 flex items-center mx-7">
            <input
              className="border-solid border-2 border-indigo-600"
              onChange={(e) => setSearchedStory(e.target.value)}
              type="text"
              name="searchbar"
              id="searchbar"
            />
            <div>
              <p className="text-white">{searchedStories ? searchedStories : null}</p>
            </div>
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
