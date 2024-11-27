import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import ArrowButton from "../components/ArrowButton/ArrowButton";

export const SingleStoryPage = () => {
  const { storyName, categoryName } = useParams();

  const { data, isLoading, error } = useFetch(
    `https://m4groupproject.onrender.com//${categoryName}/${storyName}`
  );

  console.log(data);
  const goback = () => {};

  return (
    <div className="bg-sagnir-100">
      <ArrowButton onClick={() => goback()}></ArrowButton>

      <div>
        {/* Story Image */}
        <img
          src="/images/huldufolk 1.png"
          alt="Huldufolk"
          className="w-full h-full"
        ></img>

        {/* Story Title */}
        <h2 className="font-serifExtra text-36 text-sagnir-200">
          {data?.title}
        </h2>

        {/* Listen Button */}
        <button>
          <img
            src="/src/assets/resources/listen icon dark mode.svg"
            alt="Listen icon"
          ></img>
        </button>

        {/* Story body */}
        <p className="font-glare text-16 text-sagnir-200">{data?.body}</p>
      </div>
    </div>
  );
};
