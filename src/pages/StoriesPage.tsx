import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { StoriesHeader } from "../components/StoriesHeader/StoriesHeader";
import { Categories } from "../components/Categories/Categories";
import { StoriesCard } from "../components/StoriesCard/StoriesCard";

interface StoryInterface {
  category: string;
  stories: Record<string, string>;
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
  const [clickedCategory, setClickedCategory] = useState<string>("all");
  const [selectedStories, setSelectedStories] = useState<StoryInterface | null>(
    null
  );

  const { data, isLoading, error } = useFetch(
    "https://m4groupproject.onrender.com/"
  );

  useEffect(() => {
    const storyCategories: StoriesCategoryArrayInterface[] = [];
    if (data) {
      storyCategories.push(data[0], data[1], data[4], data[5]);
    }
    setCategories(storyCategories);
  }, [data]);

  useEffect(() => {
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
        setSelectedStories(data);
      } catch (error) {
        console.error("Error fetching category stories:", error);
      }
    };

    getClickedCategoryStories(clickedCategory);
  }, [clickedCategory]);

  return (
    <div className="z-10 bg-sagnir-100 pb-8">
      {/* Sticky Header */}
      <StoriesHeader />

      {/* Fixed categories */}
      {icelandicCategoryNames.length > 0 && !isLoading && !error ? (
        <div className="sticky top-[190px] z-30 bg-sagnir-100">
          <Categories
            data={icelandicCategoryNames}
            setClickedCategory={setClickedCategory}
          />
        </div>
      ) : null}

      {/* Scrollable Content */}
      <div className="pt-2 pb-9 overflow-hidden">
        {selectedStories ? (
          <StoriesCard data={selectedStories} categoryName={clickedCategory} />
        ) : null}
      </div>
    </div>
  );
};
