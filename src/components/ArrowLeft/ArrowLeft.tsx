import React from "react";

interface ArrowLeftProps {
  onClick: () => void; // Function to handle button click
}

const ArrowLeft: React.FC<ArrowLeftProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-8 h-20 flex items-center justify-center bg-transparent rounded-full hover:text-black transition"
    >
      <img src="/src/assets/resources/arrow-left-dark-mode.svg">
      </img>
    </button>
  );
};

export default ArrowLeft;
