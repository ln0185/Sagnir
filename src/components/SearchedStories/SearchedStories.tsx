type SearchedStoriesType = {
  data: any[]; // Array of categories with their filtered stories
};

export const SearchedStories = ({ data }: SearchedStoriesType) => {
  const flatStories = data.flatMap((category) => category.stories); // Flatten the stories for all categories

  return (
    <>
      {flatStories.length > 0 ? (
        flatStories.map((story, index) => {
          return (
            <figure key={index}>
              <header>
                <h2 className="text-sagnir-200">{story}</h2>
              </header>
            </figure>
          );
        })
      ) : (
        <p>No matching stories found.</p>
      )}
    </>
  );
};
