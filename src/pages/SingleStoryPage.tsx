import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import ArrowLeft from "../components/ArrowLeft/ArrowLeft";

export const SingleStoryPage = () => {
  const { storyName, categoryName } = useParams();

  const { data, isLoading, error } = useFetch(
    `https://m4groupproject.onrender.com/${categoryName}/${storyName}`
  );

  console.log(data);
  const goback = () => {}

  return (
    <div className="bg-sagnir-100">
      <ArrowLeft onClick={() => goback()}></ArrowLeft>


      <div className="flex-col flex items-center mb-12">


        {/* Story Image */}
        <img src="../../src/assets/resources/huldufolk 1.png" alt="Huldufolk" className="w-full h-full p-3"></img>



        {/* Story Title */}
        <h2 className="font-glare text-center text-sagnir-200 p-2 pb-4 text-4xl">
          {data?.title[0]+data?.title.slice(1).toLowerCase()}
        </h2>


        {/* Listen Button */}
        
        <img src="/src/assets/resources/listen icon dark mode.svg" alt="Listen icon" className="w-10 h-10"></img>

        <p className="text-sagnir-200 font-glare text-xs pt-4 pb-3 ">Listen</p>



        {/* horizontal line */}

        <hr className="h-0.010 w-full bg-sagnir-200 border-"></hr>

        

        {/* Story body */}

        <p className="font-glare text-[16px] text-sagnir-200 flex-col tracking-wide justify-center p-8 pt-5">
          {data?.body}</p>
          
      </div>
    </div>
  );
};
