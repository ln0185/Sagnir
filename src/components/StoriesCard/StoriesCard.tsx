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
  let stories;
  console.log(data);
  if (categoryName == "all") {
    stories = data?.flatMap((item) => {
      let catStories = Object.values(item?.stories.stories);
      let allStories = catStories.flatMap((item) => item);
      return allStories;
    })
    console.log("Testing", stories);
    
  } else if (data.category !== "all") {
    stories = Object.values(data?.stories || {});
    console.log("Not this plea");
    
  }

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

  console.log("All stories", stories);
  

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
