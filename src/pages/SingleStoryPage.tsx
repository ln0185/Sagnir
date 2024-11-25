import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

export const SingleStoryPage = () => {
  const { storyName, categoryName } = useParams();

  const { data, isLoading, error } = useFetch(`http://localhost:8080/${categoryName}/${storyName}`);

  console.log(data);
  
  return (
    <div>
      <h2>{data?.title}</h2>
      <p>{data?.body}</p>
    </div>
  )
}