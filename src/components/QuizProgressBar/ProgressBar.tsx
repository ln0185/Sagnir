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
    <div className="w-full px-8 pt-9">
      {/* Top Section: Question Count */}
      <div className="flex items-center justify-between mb-2">
        <span className="font-glare text-[#F1ECDE] text-base">{`Question ${questionNumber}/${totalQuestions}`}</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-700 rounded overflow-hidden">
        <div
          className="h-full bg-[#F1ECDE]"
          style={{ width: `${progress}%` }} // Dynamic progress width
        ></div>
      </div>

      {/* Question Text */}
      <h2 className="pt-8 font-glare text-4xl text-[#F1ECDE] text-left">
        {questionText}
      </h2>
    </div>
  );
};

export default ProgressBar;
