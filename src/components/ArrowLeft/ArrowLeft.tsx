import React from "react";

interface ArrowLeftProps {
  onClick: () => void; // Function to handle button click
}

const ArrowLeft: React.FC<ArrowLeftProps> = ({ onClick }) => {
  return (
    <div className="pt-8 pb-6 pl-9">
      <button
        onClick={onClick}
        className="w-38 h-21 flex items-center justify-center bg-transparent rounded-full hover:text-black transition"
        >
        <img
          src="/src/assets/resources/arrow left dm.svg"
          className="w-38 h-21">
        </img>
      </button>
    </div>
  );
};

export default ArrowLeft;
