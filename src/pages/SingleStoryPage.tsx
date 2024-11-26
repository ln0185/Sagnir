import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const SingleStoryPage = () => {
  const { storyName, categoryName } = useParams();

  const { data, isLoading, error } = useFetch(
    `https://m4groupproject.onrender.com//${categoryName}/${storyName}`
  );

  console.log(data);

  return (
    <div>
      <h2>{data?.title}</h2>
      <p>{data?.body}</p>
    </div>
  );
};
