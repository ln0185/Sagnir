import photo from "../../../src/assets/resources/huldu1 1.png";

function getRandomPhoto() {
  return photo;
}

export const FeaturedStories = ({ item }) => {
  return (
    <div className="relative text-center">
      <img src={getRandomPhoto()} alt={item} />

      <h2>{item}</h2>
    </div>
  );
};

//TODO =
// [x] Find photos
// [x] Insert then photos into the code above
// [ ] Import the rest of the photos
// [ ] Randomize photos
// [ ] Have the title (item) display on the photo
