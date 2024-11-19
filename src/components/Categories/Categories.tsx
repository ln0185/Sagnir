import React from "react";

type CategoriesType = {
    data: string[],
    setClickedCategory: React.Dispatch<React.SetStateAction<string>>; 
}

export const Categories = ({data, setClickedCategory}: CategoriesType) => {

  const handleCategory = (clickedCategory: string) => {

    if (clickedCategory === "Tröll") {
      clickedCategory = "troll"
    }

    if (clickedCategory === "Draugar") {
      clickedCategory = "draugar"
    }

    if (clickedCategory === "Álfar og huldufólk") {
      clickedCategory = "alfar-og-huldufolk";
    }

    if (clickedCategory === "Helgisögur") {
      clickedCategory = "ur-efra-og-nedra-helgisogur"
    }

    console.log(clickedCategory);

    setClickedCategory(clickedCategory)
  }

  return (
    <div className="flex flex-row">
    <ul className="flex flex-row gap-10 justify-between overflow-x-scroll w-auto py-4 px-4">
      {data.length > 0 ? <li onClick={(e) => handleCategory((e.target as HTMLElement).innerText)} className="pl-2">Allt</li> : null}
      {data.length > 0 ? data.map((item) => {
        return (
          <li onClick={() => handleCategory(item)} className="flex-align text-nowrap" key={item}>{item}</li>
        )
      }) : null}
    </ul>
    </div>
  )
}