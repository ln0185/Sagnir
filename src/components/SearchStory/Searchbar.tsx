import { useEffect, useState } from "react"

export const Searchbar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
    const [searchedStory, setSearchedStory] = useState<string>("");
    const [searchResult, setSearchResult] = useState("");
    const [allStories, setAllStories] = useState([]);

    useEffect(() => {
        const searchDelayDebounce = setTimeout(() => {
            console.log(searchedStory);
            setSearchResult(searchedStory.toLowerCase());
        }, 1500)

        return () => clearTimeout(searchDelayDebounce)
    }, [searchedStory])

    useEffect(() => {
        const getStoriesData = async () => {
            const res = await fetch("http://localhost:8080/all");
            const data = await res.json();
            console.log(data);
            const stories = data?.map((item) => {
                return item?.stories?.stories?.map((item) => {
                    return item;
                })
            })
            setAllStories(stories);
        }
        getStoriesData();


    }, [searchResult])

    useEffect(() => {
        allStories.map((item) => {
            const filteredStories = (arr, query) => {
                return arr.filter((el) => el.includes(query));
            }

            console.log(filteredStories(item, searchResult));
            
        })
    }, [allStories])

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