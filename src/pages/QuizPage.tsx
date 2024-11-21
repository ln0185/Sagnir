import React, { useState } from "react";
import QuizOption from "../components/QuizOption/QuizOption";
import ProgressBar from "../components/QuizProgressBar/ProgressBar";

export const QuizPage = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const quiz = {
    questionNumber: 1,
    totalQuestions: 5,
    questionText: "Hvar á landinu er Lagarfljót?", // Question text
    options: [
      { label: "A", text: "Hólmavík" },
      { label: "B", text: "Egilsstaðir" },
      { label: "C", text: "Héraðsflóa" },
      { label: "D", text: "Eyrarbakki" },
    ],
    correctAnswer: "Héraðsflóa",
  };

  const handleOptionClick = (text: string) => {
    if (!isAnswered) {
      setSelectedAnswer(text);
      setIsAnswered(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen bg-black text-white p-6">
      {/* Progress Bar */}
      <ProgressBar
        questionNumber={quiz.questionNumber}
        totalQuestions={quiz.totalQuestions}
        questionText={quiz.questionText}
      />

      {/* Options */}
      <div className="w-full mt-6 grid grid-cols-1 gap-4">
        {quiz.options.map((option) => (
          <QuizOption
            key={option.label}
            label={option.label}
            text={option.text}
            isSelected={selectedAnswer === option.text}
            isCorrect={option.text === quiz.correctAnswer}
            showCorrectAnswer={isAnswered && option.text === quiz.correctAnswer}
            isIncorrect={
              isAnswered &&
              selectedAnswer === option.text &&
              option.text !== quiz.correctAnswer
            }
            onClick={() => handleOptionClick(option.text)}
          />
        ))}
      </div>
    </div>
  );
};
