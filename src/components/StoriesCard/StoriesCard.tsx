import { NavigateOptions, useNavigate } from "react-router-dom";
import photo1 from "../../assets/resources/huldufolk 1.png";
import photo2 from "../../assets/resources/huldu1 1.png";
import photo3 from "../../assets/resources/photoBW.svg";
import photo4 from "../../assets/resources/Brian-pilkington-troll2.jpg";
import photo5 from "../../assets/resources/Elves.jpg";
import photo6 from "../../assets/resources/Swan-Mythology.webp";

interface StoriesCardInterface {
  [key: string]: string;
}

type StoriesCardType = {
  data: StoriesCardInterface;
  categoryName: string | NavigateOptions;
};

export const StoriesCard = ({ data, categoryName }: StoriesCardType) => {
  const navigate = useNavigate();

  // Mapping of categories to their respective image arrays
  const categoryPhotos: Record<string, string[]> = {
    default: [photo1, photo2, photo3],
    troll: [photo4, photo5, photo6],
    draugar: [photo1, photo4, photo3],
    alfa: [photo4, photo6, photo5],
    helgisogur: [photo2, photo3, photo6],
  };
  // Select images based on the current category or fallback to default
  const selectedPhotos =
    typeof categoryName === "string"
      ? categoryPhotos[categoryName.toLowerCase()] || categoryPhotos.default
      : categoryPhotos.default;

  let stories = data ? Object.values(data?.stories || data) : [];

  const handleStoryClick = (story: string, category: string) => {
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
      "Ábæjar-Skotta": "skotta3",
      "Átján draugar úr Blöndu": "18draug",
      "Átján sendingar í senn": "18send",
      "Átján Skólabræður": "18skolab",
      "Andrarímur og Hallgrímsrímur": "andra",
      "Bergþór Bláfellingur": "blafell",
      Bakkastaður: "bakka",
      "Brytinn í Skálholti": "brytinn",
      "Dansinn í Hruna": "hruna",
    };

    const storyCategory = categoryNavigations[category] || category;
    const storySlug = storyNavigations[story] || story;

    navigate(`/stories/${storyCategory}/${storySlug}`);
  };

  if (!stories || stories.length === 0) {
    return (
      <p className="text-center">No stories available for this category.</p>
    );
  }

  return (
    <div className="bg-sagnir-100 flex flex-wrap flex-col justify-center w-full gap-4">
      {stories.slice(0, 3).map((story, index) => (
        <figure key={story} className="flex flex-col items-center w-full">
          <header className="relative w-full">
            <img
              src={selectedPhotos[index] || "default-photo-path.svg"}
              alt={`Story ${story}`}
              className="w-full h-auto rounded-lg"
            />
            <h2
              className="absolute bottom-2 left-2 text-sagnir-200 font-serifExtra text-2xl md:text-5xl px-2 py-1 rounded-md cursor-pointer"
              onClick={() =>
                typeof categoryName === "string" &&
                handleStoryClick(story, categoryName)
              }
            >
              {story !== "categories" ? story.replace(/[/]/g, "") : ""}
            </h2>
          </header>
        </figure>
      ))}
    </div>
  );
};
