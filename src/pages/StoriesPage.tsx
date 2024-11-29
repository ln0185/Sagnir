import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { StoriesHeader } from "../components/StoriesHeader/StoriesHeader";
import { Categories } from "../components/Categories/Categories";
import { StoriesCard } from "../components/StoriesCard/StoriesCard";
import { Searchbar } from "../components/SearchStory/Searchbar";

interface StoryInterface {
  [key: string]: string;
}

interface StoriesCategoryArrayInterface {
  category: string;
  stories: StoryInterface;
}

export const StoriesPage = () => {
  const [categories, setCategories] = useState<StoriesCategoryArrayInterface[]>(
    []
  );
  const [icelandicCategoryNames, setIcelandicCategoryNames] = useState<
    string[]
  >([]);
  const [clickedCategory, setClickedCategory] = useState<string>("all"); // Set default category to "all"
  const [selectedStories, setSelectedStories] = useState<StoryInterface | null>(
    null
  );

  const { data, isLoading, error } = useFetch(
    "https://m4groupproject.onrender.com/"
  );

  useEffect(() => {
    // Ensure we set the categories after fetching the data
    const storyCategories: StoriesCategoryArrayInterface[] = [];
    if (data) {
      storyCategories.push(data[0], data[1], data[4], data[5]);
    }
    setCategories(storyCategories);
  }, [data]);

  useEffect(() => {
    // Set Icelandic category names after categories are set
    const icelandicNamesArray = [...categories];
    const categoryObjects = icelandicNamesArray.reduce(
      (acc: Record<string, string>, item, index) => {
        if (item && item.category) {
          acc[`category_${index}`] = item.category;
        }
        return acc;
      },
      {}
    );
    categoryObjects.category_0 = "Álfar og huldufólk";
    categoryObjects.category_1 = "Draugar";
    categoryObjects.category_2 = "Tröll";
    categoryObjects.category_3 = "Helgisögur";

    const icelandicCategories = Object.values(categoryObjects);
    setIcelandicCategoryNames(icelandicCategories);
  }, [categories]);

  useEffect(() => {
    const getClickedCategoryStories = async (clickedCategory: string) => {
      try {
        const res = await fetch(
          `https://m4groupproject.onrender.com/${clickedCategory}`
        );
        const data: StoryInterface = await res.json();
        console.log("Fetched Stories:", data);
        setSelectedStories(data);
      } catch (error) {
        console.error("Error fetching category stories:", error);
      }
    };

    // Fetch stories for the selected category (default is "all")
    getClickedCategoryStories(clickedCategory);
  }, [clickedCategory]);

  return (
    <div className="relative pb-8">
      {/* Fixed header */}
      <StoriesHeader />

      {/* Fixed categories */}
      {icelandicCategoryNames.length > 0 && !isLoading && !error ? (
        <div className="sticky top-[80px] z-10 bg-sagnir-100">
          <Categories
            data={icelandicCategoryNames}
            setClickedCategory={setClickedCategory}
          />
        </div>
      ) : null}

      {/* Content that scrolls */}
      <div className="mt-4 overflow-y-auto">
        {/* Stories */}
        {selectedStories ? (
          <StoriesCard data={selectedStories} categoryName={clickedCategory} />
        ) : null}

        {/* Search bar */}
        <Searchbar />
      </div>
    </div>
  );
};
