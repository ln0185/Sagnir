let photo1 = "../../../images/huldu1 1.png";
let photo2 = "../../../images/krissi_05249_Ghosts_and_Hauntings_Deacon_of_Myrka_draugar_more__e2276cf9-66cf-41b0-9836-0dd3c3a0ef3b 1.png";
let photo3 = "../../../images/huldufolk 1.png"
let photo4


export const FeaturedStories = ({ item }:{item:string}) => {
  return (
    <><div className="relative text-center">
      <img src={photo1} alt={item} />

      <h2>{item}</h2>
    </div><div className="relative text-center">
        <img src={photo2} alt={item} />

        <h2>{item}</h2>
      </div>
      <div className="relative text-center">
        <img src={photo3} alt={item} />

        <h2>{item}</h2>
      </div>
      </>

  );
};

//TODO =
// [x] Find photos
// [x] Insert then photos into the code above
// [x] Import the rest of the photos
// [ ] Have the title (item) display on the photo
// [ ] If the story is arnljot = put this photo, if the story is skotta, put that photo
// [ ]
