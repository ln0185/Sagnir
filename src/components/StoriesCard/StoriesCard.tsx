import { useEffect, useState } from "react";
import { NavigateOptions, useNavigate } from "react-router-dom";
let photo1 = "../../../src/assets/resources/huldufolk 1.png";
let photo2 = "../../../src/assets/resources/huldu 1.png";
let photo3 = "../../../src/assets/resources/photoBW.svg";

interface StoriesCardInterface {
  [key: string]: string;
}

// type StoriesCardType = {
//   data: StoriesCardInterface;
//   categoryName: string | NavigateOptions;
// };

type StoriesCardType = {
  data: {
    category: string;
    stories: Record<string, string>;
  };
  categoryName: string | NavigateOptions;
}

export const StoriesCard = ({ data, categoryName }: StoriesCardType) => {
  const [stories, setStories] = useState<string[]>([]);
  console.log(data);

  useEffect(() => {
    if (categoryName === "all" && data) {
    let allStories = [];

    if (Array.isArray(data)) {
      allStories = data.flatMap((item) => {
        let catStories = Object.values(item?.stories.stories);
        let allStories = catStories.flatMap((item) => item);
        return allStories;
      }
      );
    }
    else {
      allStories = Object.values(data?.stories || {});
    }
    console.log("All the stories", allStories);
    
    } else if (data.category !== "all") {
      const catStories = Object.values(data?.stories || {});
      console.log(catStories);
      setStories(catStories);
    }
  }, [data, categoryName])

  let navigate = useNavigate();

  const handleStoryClick = (e: string, categoryName: string) => {
    //The new category sorting for single story page
    const categoryNavigations: Record<string, string> = {
      Allt: "all",
      Tröll: "troll",
      Draugar: "draugar",
      "alfar-og-huldufolk": "alfa",
      Helgisögur: "ur-efra-og-nedra-helgisogur",
    };

    //The new category story sorting for single story page
    const storyNavigations: Record<string, string> = {
      //alfa
      "Að hverjum andskotanum ertu að leita?": "leita",
      "Arnljótur huldumaður": "arnljot",
      "Álfadrottning í álögum": "alfa-dr",

      //draugar
      "Ábæjar-Skotta": "skotta3",
      "Átján draugar úr Blöndu": "18draug",
      "Átján sendingar í senn": "18send",

      //
      "Átján Skólabræður": "18skolab",
      "Andrarímur og Hallgrímsrímur": "andra",
      "Bergþór Bláfellingur": "blafell",

      Bakkastaður: "bakka",
      "Brytinn í Skálholti": "brytinn",
      "Dansinn í Hruna": "hruna",
    };

    const storyCategories = categoryNavigations[categoryName] || categoryName;
    const categoryStories = storyNavigations[e] || e;

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
                {item == "categories" && item ? null : item.replace(/[/]/g, "")}
              </h2>
            </header>
          </figure>
        );
      })}
    </>
  );
};
