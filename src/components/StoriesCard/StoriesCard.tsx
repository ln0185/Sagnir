interface StoriesCardInterface {
  name: string,
  stories: string[]
}

type StoriesCardType = {
  data: StoriesCardInterface
}

export const StoriesCard = ({data}: StoriesCardType) => {
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
                <h2>{item.slice(1)}</h2>
              </header>
            </figure>
          )
        })}
    </>
  )
}