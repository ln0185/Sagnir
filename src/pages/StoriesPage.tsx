import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { StoriesHeader } from "../components/StoriesHeader/StoriesHeader";
import { Categories } from "../components/Categories/Categories";
import { StoriesCard } from "../components/StoriesCard/StoriesCard";

interface StoryInterface {
  category: string;
  stories: Record<string, string>;
}

interface StoriesCategoryArrayInterface {
  category: string;
  stories: StoryInterface[];
}

const categoryDisplayNames: { [key: string]: string } = {
  troll: "Tröll",
  draug: "Draugar",
  alfa: "Álfar og huldufólk",
  efra: "Helgisögur",
};

export const StoriesPage = () => {
  const [clickedCategory, setClickedCategory] = useState<string>("all");

  const { data: allStories, isLoading } = useQuery<
    StoriesCategoryArrayInterface[]
  >({
    queryKey: ["allStories"],
    queryFn: () =>
      fetch("https://m4groupproject.onrender.com/all").then((res) =>
        res.json()
      ),
  });

  const categoryNames =
    allStories?.map(
      (category: StoriesCategoryArrayInterface) =>
        categoryDisplayNames[category.category] || category.category 
    ) || [];

  const { data: selectedStories } = useQuery({
    queryKey: ["categoryStories", clickedCategory],
    queryFn: async () => {
      const res = await fetch(
        `https://m4groupproject.onrender.com/${clickedCategory}`
      );
      return res.json();
    },
    enabled: !!clickedCategory,
    initialData: () =>
      allStories?.find((item) => item.category === clickedCategory)?.stories,
  });

  return (
    <div className="z-10 bg-sagnir-100 pb-8">
      <StoriesHeader />
      {categoryNames.length > 0 && !isLoading ? (
        <div className="sticky top-[190px] z-30 bg-sagnir-100">
          <Categories
            data={categoryNames}
            setClickedCategory={setClickedCategory}
          />
        </div>
      ) : null}
      <div className="pt-2 pb-9 overflow-hidden">
        {selectedStories ? (
          <StoriesCard data={selectedStories} categoryName={clickedCategory} />
        ) : null}
      </div>
    </div>
  );
};
