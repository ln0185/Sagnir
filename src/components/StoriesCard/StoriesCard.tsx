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

    // console.log(console.log("Category name", categoryName));
    navigate(`/stories/${categoryName}/${e}`);
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
