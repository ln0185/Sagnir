import React from "react";

interface QuizOptionProps {
  label: string; // "A", "B", "C", "D"
  text: string; // Answer text
  isSelected: boolean; // Whether this option is selected
  isCorrect: boolean; // Whether this is the correct option
  isIncorrect: boolean; // Whether this option is the wrong selection
  showCorrectAnswer: boolean; // Highlight correct answer
  onClick: () => void; // Function for handling clicks
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
      className={`w-full py-3 px-4 flex items-center text-left border rounded-lg transition ${
        showCorrectAnswer
          ? "bg-amber-100 border-black text-black" // Highlight correct answer
          : isIncorrect
          ? "bg-black border-amber-100 text-amber-100" // Highlight wrong answer
          : isSelected
          ? isCorrect
            ? "bg-black border-amber-100 text-black" // Selected and correct (text turns black)
            : "bg-black border-gray-700 text-amber-100" // Selected but not correct
          : "bg-black border-amber-100 hover:bg-gray-700" // Default state
      }`}
      onClick={onClick}
    >
      {/* Option Label */}
      <span
        className={`font-bold text-lg mr-4 ${
          showCorrectAnswer || (isSelected && isCorrect)
            ? "text-black"
            : "text-amber-100"
        }`}
      >
        {label}
      </span>

      {/* Option Text */}
      <span
        className={`text-sm ${
          showCorrectAnswer || (isSelected && isCorrect)
            ? "text-black"
            : "text-amber-100"
        }`}
      >
        {text}
      </span>

      {/* Icons for Correct/Incorrect */}
      {isIncorrect && <span className="ml-auto text-amber-100">✗</span>}
      {showCorrectAnswer && <span className="ml-auto text-black">✓</span>}
    </button>
  );
};

export default QuizOption;
