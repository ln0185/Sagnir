import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch"
import { StoriesHeader } from "../components/StoriesHeader/StoriesHeader";
import { Categories } from "../components/Categories/Categories";
import { StoriesCard } from "../components/StoriesCard/StoriesCard";
import { Searchbar } from "../components/SearchStory/Searchbar";

export const StoriesPage = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [icelandicCategoryNames, setIcelandicCategoryNames] = useState<string[]>([]);
  const [clickedCategory, setClickedCategory] = useState<string>('');
  const [selectedStories, setSelectedStories] = useState();

  const { data, isLoading, error } = useFetch("http://localhost:8080/");

  useEffect(() => {
    const storyCategories = [];
    if (data) {
      storyCategories.push(data[0], data[1], data[4], data[5]);
    }
    setCategories(storyCategories);
  }, [data])

  useEffect(() => {
    const icelandicNamesArray = [...categories];

    const categoryObjects = icelandicNamesArray.reduce((acc: Record<string, string>, item, index) => {
      acc[`category_${index}`] = item;
      return acc;
    }, {});

    categoryObjects.category_0 = "Álfar og huldufólk";
    categoryObjects.category_1 = "Draugar";
    categoryObjects.category_2 = "Tröll";
    categoryObjects.category_3 = "Helgisögur";

    const icelandicCategories = Object.values(categoryObjects);

    setIcelandicCategoryNames(icelandicCategories);
  }, [categories])

  useEffect(() => {
    const getClickedCategoryStories = async (clickedCategory: string) => {
      const res = await fetch(`http://localhost:8080/${clickedCategory}`);
      const data = await res.json();
      console.log(data);
      setSelectedStories(data);
    }

    getClickedCategoryStories(clickedCategory);
  }, [clickedCategory])

  return (
    <div>
      <StoriesHeader />
      {icelandicCategoryNames.length > 0 && !isLoading && !error ? <Categories data={icelandicCategoryNames} setClickedCategory={setClickedCategory}/> : null}
      {selectedStories ? <StoriesCard data={selectedStories} categoryName={clickedCategory}/> : null}
     <Searchbar />
    </div>
  )
}
