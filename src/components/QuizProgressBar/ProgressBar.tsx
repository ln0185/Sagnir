interface ProgressBarProps {
  questionNumber: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  questionNumber,
  totalQuestions,
}) => {
  const progress = (questionNumber / totalQuestions) * 100;

  return (
    <div className="w-full pt-9">
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
    </div>
  );
};

export default ProgressBar;
