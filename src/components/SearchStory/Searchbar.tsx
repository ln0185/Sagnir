import { useEffect, useState } from "react"

interface StoriesInterface {
    category: string, 
}

export const Searchbar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
    const [searchedStory, setSearchedStory] = useState<string>("");
    const [searchResult, setSearchResult] = useState("");
    const [allStories, setAllStories] = useState([]);
    const [searchedStories, setSearchedStories] = useState();

    useEffect(() => {
        const searchDelayDebounce = setTimeout(() => {
            console.log(searchedStory);
            if (searchedStory != "") {
                setSearchResult(searchedStory.toLowerCase());
            }
        }, 1500)

        return () => clearTimeout(searchDelayDebounce)
    }, [searchedStory])

    useEffect(() => {
        const getStoriesData = async () => {
            const res = await fetch("http://localhost:8080/all");
            const data = await res.json();
            console.log("Stories Array", data);
            const stories = data?.map((item: StoriesInterface) => {
                let allStories = item.stories;
                return Object.keys(allStories.stories);
            })
            setAllStories(stories);
        }
        getStoriesData();


    }, [searchResult])

    useEffect(() => {
        allStories.map((item) => {
            const filteredStories = (arr, query: string) => {
                return arr.filter((el) => el.includes(query));
            }

            let stories = filteredStories(item, searchResult);
            
            setSearchedStories(stories);
        })
    }, [allStories])

    useEffect(() => {
        console.log(searchedStories);
    }, [searchedStories])

  return (
    <>
        {isSearchOpen ? <> <div className="bg-slate-900 flex items-center mx-7">
            <input className="border-solid border-2 border-indigo-600" onChange={(e) => setSearchedStory(e.target.value)} type="text" name="searchbar" id="searchbar"/>
            <p>{searchResult}</p>
        </div></>
        
         : null}
         {/*Temp button for testing  */}
        <button onClick={() => setIsSearchOpen((prev) => !prev)}>Open Search</button>
    </>
  )
}