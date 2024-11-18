import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch"
import { Categories } from "../components/Categories/Categories";

export const StoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const { data, isLoading, error } = useFetch("http://localhost:8080/");

  console.log(data);

  useEffect(() => {
    const storyCategories = [];
    if (data) {
      storyCategories.push(data[0], data[1], data[4], data[5]);
    }
    setCategories(storyCategories);
  }, [])

  useEffect(() => {
    console.log("Categories", categories);
  }, [categories])
  
  return (
    <div>
      {categories && !isLoading && !error ? <Categories data={categories}/> : null}
    </div>
  )
}