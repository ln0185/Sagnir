import React from "react";

interface QuizOptionProps {
  label: string; // "A", "B", "C", "D"
  text: string;
  isSelected: boolean;
  isCorrect: boolean;
  isIncorrect: boolean;
  showCorrectAnswer: boolean;
  onClick: () => void;
}

const QuizOption: React.FC<QuizOptionProps> = ({
  label,
  text,
  isSelected,
  isIncorrect,
  showCorrectAnswer,
  isCorrect,
  onClick,
}) => {
  return (
    <button
      className={`w-full py-3 px-6 flex items-center text-left border rounded-lg transition ${
        showCorrectAnswer
          ? "bg-[#F1ECDE] border-[#F1ECDE] text-black" // Highlight correct answer
          : isIncorrect
          ? "bg-black border-[#F1ECDE] text-[#F1ECDE]" // Highlight wrong answer
          : isSelected
          ? isCorrect
            ? "bg-black border-[#F1ECDE] text-black" // Selected and correct (text turns black)
            : "bg-black border-gray-700 text-[#F1ECDE]" // Selected but not correct
          : "bg-black border-[#F1ECDE] hover:bg-gray-700" // Default state
      }`}
      onClick={onClick}
    >
      {/* Option Label */}
      <span
        className={`font-glare text-xl ${
          showCorrectAnswer || (isSelected && isCorrect)
            ? "text-black"
            : "text-[#F1ECDE]"
        }`}
      >
        {label}
      </span>

      {/* Vertical Line */}
      <div className="w-px h-9 bg-[#F1ECDE] mx-4"></div>

      {/* Option Text */}
      <span
        className={`font-glare text-xl ${
          showCorrectAnswer || (isSelected && isCorrect)
            ? "text-black"
            : "text-[#F1ECDE]"
        }`}
      >
        {text}
      </span>

      {/* Icons for Correct/Incorrect */}
      {isIncorrect && (
        <span className="font-sans ml-auto text-[#F1ECDE]">✗</span>
      )}
      {showCorrectAnswer && (
        <span className="ml-auto">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-black"
          >
            <path
              d="M19 7L9.66667 16L5 11.5"
              stroke="#1A1616"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </button>
  );
};

export default QuizOption;
