import { FeaturedStories } from "./FeaturedStories";
import { NavigateOptions } from "react-router-dom";

interface StoriesCardInterface {
  [key: string]: string;
}

type StoriesCardType = {
  data: StoriesCardInterface;
  categoryName: string | NavigateOptions,
};

export const StoriesCard = ({data, categoryName}: StoriesCardType) => {
  let stories;
  console.log(data);
  if (data) {
    stories = Object.keys(data?.stories || data);
  }
  
  return (
    <>
      {stories?.slice(0, 3).map((item) => {
        return (
          <figure key={item}>
            <header>
              <FeaturedStories item={item} categoryName={categoryName}></FeaturedStories>
            </header>
          </figure>
        );
      })}
    </>
  );
};
