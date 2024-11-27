import { FeaturedStories } from "./FeaturedStories";
import { NavigateOptions, useNavigate } from "react-router-dom";

interface StoriesCardInterface {
  [key: string]: string;
}

type StoriesCardType = {
  data: StoriesCardInterface;
  categoryName: string | NavigateOptions;
};

export const StoriesCard = ({ data, categoryName }: StoriesCardType) => {
  let stories;
  console.log(data);
  if (data) {
    stories = Object.values(data?.stories || data);
  }

  let navigate = useNavigate();

  const handleStoryClick = (e: string, categoryName: string) => {

    const categoryNavigations: Record<string, string> = {
      Allt: "all",
      Tröll: "troll",
      Draugar: "draugar",
      "alfar-og-huldufolk": "alfa",
      Helgisögur: "ur-efra-og-nedra-helgisogur",
    };

    const storyNavigations: Record<string, string> = {
      "Að hverjum andskotanum ertu að leita?": "leita",
      "Arnljótur huldumaður": "arnljot",
      "Álfadrottning í álögum": "alfa-dr",
    };

    if (categoryName === "Allt") {
      categoryName = "all";
    }

    if (categoryName === "Tröll") {
      categoryName = "troll";
    }

    if (categoryName === "Draugar") {
      categoryName = "draugar";
    }

    if (categoryName === "alfar-og-huldufolk") {
      categoryName = "alfa";
    }

    if (categoryName === "Helgisögur") {
      categoryName = "ur-efra-og-nedra-helgisogur";
    }

    if (e === "Að hverjum andskotanum ertu að leita?") {
      e = "leita";
    }

    if (e === "Arnljótur huldumaður") {
      e = "arnljot"
    }

    if (e === "Álfadrottning í álögum") {
      e = "alfa-dr"
    }

    const storyCategories = categoryNavigations[categoryName] || categoryName;
    const categoryStories = storyNavigations[e] || e;

    // console.log(console.log("Category name", categoryName));
    navigate(`/stories/${storyCategories}/${categoryStories}`);
  };

  return (
    <>
      {stories?.slice(0, 3).map((item) => {
        return (
          <figure key={item}>
            <header>
              <h2
                onClick={(e) =>
                  handleStoryClick(e.target.innerText, categoryName)
                }
              >
                {item == "categories" ? null : item.replace(/[/]/g, "")}
              </h2>
            </header>
          </figure>
        );
      })}
    </>
  );
};
