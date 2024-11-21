import React from "react";

interface ProgressBarProps {
  questionNumber: number; // Current question number
  totalQuestions: number; // Total number of questions
  questionText: string; // The question to display
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  questionNumber,
  totalQuestions,
  questionText,
}) => {
  const progress = (questionNumber / totalQuestions) * 100;

  return (
    <div className="w-full text-center">
      {/* Progress Bar */}
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="text-amber-100">{`Question ${questionNumber}/${totalQuestions}`}</span>
        <div className="w-full mx-4 h-2 bg-gray-700 rounded overflow-hidden">
          <div
            className="h-full bg-amber-100"
            style={{ width: `${progress}%` }} // Dynamic progress width
          ></div>
        </div>
        <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
          <span className="block w-3 h-3 bg-amber-100 rounded-full"></span>
        </div>
      </div>

      {/* Question Text */}
      <h2 className="text-2xl font-serif text-amber-100">{questionText}</h2>
    </div>
  );
};

export default ProgressBar;
