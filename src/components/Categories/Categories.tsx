type CategoriesType = {
    data: string[]
}

export const Categories = ({data}: CategoriesType) => {
  return (
    <div className="flex flex-row">
    <ul className="flex flex-row gap-10 justify-between overflow-x-scroll w-auto py-4 px-4">
      {data.length > 0 ? <li className="pl-2">Allt</li> : null}
      {data.length > 0 ? data.map((item) => {
        return (
          <li className="flex-align text-nowrap" key={item}>{item}</li>
        )
      }) : null}
    </ul>
    </div>
  )
}