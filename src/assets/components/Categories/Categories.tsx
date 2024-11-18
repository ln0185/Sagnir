type CategoriesType = {
    data: string[]
}

export const Categories = ({data}: CategoriesType) => {
  return (
    <div>
    <ul>
        {data.map((item) => {
            return (
                <li key={item}>{item}</li>
            )
        })}
    </ul>
    </div>
  )
}