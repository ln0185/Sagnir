import { useEffect, useState } from "react";
import { StoriesCard } from "../StoriesCard/StoriesCard";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

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
      const stories = data?.map((item: StoriesInterface) => {
        
        let allStories = item.stories;
        let allTheStories = Object.values(allStories);
        return allTheStories
      });
      setAllStories(stories.flat());
    };
    getStoriesData();
  }, [searchResult]);

  useEffect(() => {
    let searchStories = allStories.map((item) => {
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

  const handleStoryClick = (storyName: string) => {
    //TODO compare string with database to find story
    // const storyTitle = storyName.toLowerCase().replace(/\s+/g, "-");
    // console.log(storyTitle);
    console.log("Story title", storyName);
    console.log("All stories", allStories);
    allStories.map((item) => {
      console.log(item);
      const match = Object.entries(item).find(([key, value]) => value === storyName);
      console.log(match);
    })

    // navigate(`/stories/${undefined}/${storyTitle}`)
  }

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
              {searchedCategoryStory.length > 0 ? searchedCategoryStory.map((item) => {
                return (
                  <p key={item} onClick={(e) => handleStoryClick((e.target as HTMLElement).innerText)} className="text-white">{item}</p>
                )
              }) : <p className="text-white">No stories</p>}
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
