import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import ArrowButton from "../components/ArrowButton/ArrowButton";
import ArrowLeft from "../components/ArrowLeft/ArrowLeft";

export const SingleStoryPage = () => {
  const { storyName, categoryName } = useParams();

  const { data, isLoading, error } = useFetch(
    `https://m4groupproject.onrender.com//${categoryName}/${storyName}`
  );

  console.log(data);
  const goback = () => {};

  return (
    <div className="bg-sagnir-100">
      <ArrowLeft onClick={() => goback()}></ArrowLeft>


      
      <div
      className="flex-col flex items-center mb-12">

        {/* Story Image */}
        <img
          src="/images/huldufolk 1.png"
          alt="Huldufolk"
          className="w-full h-full p-5">
        </img>


        {/* Story Title */}
        <h2
          className="font-serifExtra text-36 text-sagnir-200 p-8">{data?.title }

        </h2>

        {/* Listen Button */}
        
          <img
            src="/src/assets/resources/listen icon dark mode.svg"
            alt="Listen icon"
            className="w-8 h-8">
          </img>


        {/* Story body */}

        <p
          className="font-glare text-16 text-sagnir-200 flex-col justify-center p-8">{data?.body}
        </p>
      </div>
    </div>
  );
};
