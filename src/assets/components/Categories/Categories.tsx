type CategoriesType = {
    data: string[]
}

export const Categories = ({data}: CategoriesType) => {
  return (
    <div className="flex">
    <ul className="flex flex-row">
      {data.length > 0 ? data.map((item) => {
        return (
          <li className="flex-align" key={item}>{item}</li>
        )
      }) : null}
    </ul>
    </div>
  )
}