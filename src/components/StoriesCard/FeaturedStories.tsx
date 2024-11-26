import photo from "../../../src/assets/resources/huldu1 1.png";

function getRandomPhoto() {
  return photo;
}

export const FeaturedStories = ({ item, categoryName }) => {
  let navigate = useNavigate();
  console.log(item);

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
    navigate(`/stories/${categoryName}/${e}`);
  };

  return (
    <div className="relative text-center">
      <img src={getRandomPhoto()} alt={item} />
      <h2 onClick={(e) => handleStoryClick(e.target.innerText, categoryName)}>
        {item == "categories" ? null : item.replace(/[/]/g, "")}
      </h2>
    </div>
  );
};

//TODO =
// [x] Find photos
// [x] Insert then photos into the code above
// [ ] Import the rest of the photos
// [ ] Randomize photos
// [ ] Have the title (item) display on the photo
