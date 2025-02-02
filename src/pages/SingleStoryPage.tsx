import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import ArrowLeft from "../components/ArrowLeft/ArrowLeft";

import image from "../../src/assets/resources/huldufolk 1.png";
import listenImg from "/src/assets/resources/listen icon dark mode.svg";

export const SingleStoryPage = () => {
  const { storyName, categoryName } = useParams();
  const navigate = useNavigate(); 

  const { data, isLoading, error } = useFetch(
    `https://m4groupproject.onrender.com/${categoryName}/${storyName}`
  );

  console.log(data);

 
  const goback = () => {
    navigate(-1); 
  };


  if (isLoading) {
    return <div>Loading...</div>; 
  }

 
  if (error) {
    return <div>Error loading story.</div>; 
  }

  return (
    <div className="bg-sagnir-100">
      <ArrowLeft onClick={goback} />

      <div className="flex-col flex items-center mb-12">
       
        <img
          src={image}
          alt="Huldufolk"
          className="w-full h-full md:h-2/3 md:w-full"
        />

       
        <h2 className="font-glare text-center text-sagnir-200 p-2 pb-4 text-4xl md:p-6 md:text-6xl">
          {data?.title[0] + data?.title.slice(1).toLowerCase()}
        </h2>

       
        <img src={listenImg} alt="Listen icon" className="w-10 h-10" />
        <p className="text-sagnir-200 font-glare text-xs pt-4 pb-3 md:text-xl">
          Listen
        </p>

       
        <hr className="h-0.010 w-full bg-sagnir-200" />

       
        <p className="font-glare text-[16px] text-sagnir-200 flex-col tracking-wide justify-center p-8 pt-5 leading-relaxed md:leading-loose md:p-10">
          {data?.body}
        </p>
      </div>
    </div>
  );
};
