interface StoriesCardInterface {
  name: string;
  stories: string[];
}

type StoriesCardType = {
  data: StoriesCardInterface;
};

export const StoriesCard = ({ data }: StoriesCardType) => {
  return (
    <>
      {data.stories &&
        Object.values(data.stories).map((item) => {
          return (
            <figure key={item}>
              <header>
                <h2>{item}</h2>
              </header>
            </figure>
          );
        })}
    </>
  );
};
