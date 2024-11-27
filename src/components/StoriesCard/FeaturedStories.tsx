import { useNavigate } from "react-router-dom";

let photo1 = "../../../images/huldu1 1.png";
let photo2 = "../../../images/krissi_05249_Ghosts_and_Hauntings_Deacon_of_Myrka_draugar_more__e2276cf9-66cf-41b0-9836-0dd3c3a0ef3b 1.png";
let photo3 = "../../../images/huldufolk 1.png"
let photo4


export const FeaturedStories = ({ item, categoryName }) => {

  let navigate = useNavigate();
  console.log(item);

  const handleStoryClick = (e: string, categoryName: string) => {
    if (categoryName === "Allt") {
      categoryName = "all"
    }
    if (categoryName === "Tröll") {
      categoryName = "troll"
    }

    if (categoryName === "Draugar") {
      categoryName = "draugar"
    }

    if (categoryName === "alfar-og-huldufolk") {
      categoryName = "alfa";
    }

    if (categoryName === "Helgisögur") {
      categoryName = "ur-efra-og-nedra-helgisogur"
    }
    navigate(`/stories/${categoryName}/${e}`);
  }

  return (
    <div className="relative text-center">
      <img src={getRandomPhoto()} alt={item} />
      <h2 onClick={(e) => handleStoryClick(e.target.innerText, categoryName)}>{item == "categories" ? null : item.replace(/[/]/g, "")}</h2>
    </div>
  );
};

//TODO =
// [x] Find photos
// [x] Insert then photos into the code above
// [x] Import the rest of the photos
// [ ] Have the title (item) display on the photo
// [ ] If the story is arnljot = put this photo, if the story is skotta, put that photo
// [ ]
