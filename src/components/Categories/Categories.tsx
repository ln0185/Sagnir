import React from "react";

type CategoriesType = {
  data: string[];
  setClickedCategory: React.Dispatch<React.SetStateAction<string>>;
};

export const Categories = ({ data, setClickedCategory }: CategoriesType) => {
  const handleCategory = (clickedCategory: string) => {
    if (clickedCategory === "Allt") {
      clickedCategory = "all";
    }

    if (clickedCategory === "Tröll") {
      clickedCategory = "troll";
    }

    if (clickedCategory === "Draugar") {
      clickedCategory = "draug";
    }

    if (clickedCategory === "Álfar og huldufólk") {
      clickedCategory = "alfa";
    }

    if (clickedCategory === "Helgisögur") {
      clickedCategory = "efra";
    }

    console.log("Category test", clickedCategory);

    setClickedCategory(clickedCategory);
  };

  return (
    <div className="flex flex-row bg-sagnir-100 text-sagnir-200 text-lg">
      <ul className="flex flex-row gap-10 justify-between overflow-x-scroll md:w-full md:text-2xl py-4 px-4">
        {data.length > 0 ? (
          <li
            onClick={(e) => handleCategory((e.target as HTMLElement).innerText)}
            className="pl-2"
          >
            Allt
          </li>
        ) : null}
        {data.length > 0
          ? data.map((item) => {
              return (
                <li
                  onClick={() => handleCategory(item)}
                  className="flex-align text-nowrap"
                  key={item}
                >
                  {item}
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};
