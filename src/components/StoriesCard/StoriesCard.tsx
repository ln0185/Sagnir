import { NavigateOptions, useNavigate } from "react-router-dom";
let photo1 = "../../../src/assets/resources/huldufolk 1.png";
let photo2 = "../../../src/assets/resources/huldu1 1.png";
let photo3 = "../../../src/assets/resources/photoBW.svg"

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

      "Bakkastaður": "bakka",
      "Brytinn í Skálholti": "brytinn",
      "Dansinn í Hruna": "hruna",
    };

    const storyCategories = categoryNavigations[categoryName] || categoryName;
    const categoryStories = storyNavigations[e] || e;

    navigate(/stories/${storyCategories}/${categoryStories});
  };
  console.log(photo2)
  const photos = [photo1, photo2, photo3];
return (
  <>
    {stories?.slice(0, 3).map((item, index) => {
      return (
        <figure
          key={item}
          className="flex-col flex items-center mb-4"
        >
          <header className="relative">
            <img
              src={photos[index]}
            ></img>
            <h2
              className="absolute bottom-0"
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
