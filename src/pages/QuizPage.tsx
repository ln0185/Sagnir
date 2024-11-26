import React, { useState } from "react";
import QuizOption from "../components/QuizOption/QuizOption";
import ProgressBar from "../components/QuizProgressBar/ProgressBar";
import ArrowButton from "../components/ArrowButton/ArrowButton";

export const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const questions = [
    {
      questionNumber: 1,
      totalQuestions: 5,
      questionText: "Hvar á landinu er Lagarfljót?",
      options: [
        { label: "A", text: "Hólmavík" },
        { label: "B", text: "Egilsstaðir" },
        { label: "C", text: "Héraðsflóa" },
        { label: "D", text: "Eyrarbakki" },
      ],
      correctAnswer: "Héraðsflóa",
    },
    {
      questionNumber: 2,
      totalQuestions: 5,
      questionText: "Hvað á grýla mörg börn?",
      options: [
        { label: "A", text: "Þrjátíu" },
        { label: "B", text: "Fimm" },
        { label: "C", text: "Þrettán" },
        { label: "D", text: "Tuttugu" },
      ],
      correctAnswer: "Tuttugu",
    },
    {
      questionNumber: 3,
      totalQuestions: 5,
      questionText: "Hver er þjóðsaga um huldufólk?",
      options: [
        { label: "A", text: "Skessan í Borgarfirði" },
        { label: "B", text: "Álfar og jólin" },
        { label: "C", text: "Dvergasteinn" },
        { label: "D", text: "Tröll í Hítardal" },
      ],
      correctAnswer: "Álfar og jólin",
    },
    {
      questionNumber: 4,
      totalQuestions: 5,
      questionText: "Hvað heitir lengsta á á Íslandi?",
      options: [
        { label: "A", text: "Ölfusá" },
        { label: "B", text: "Þjórsá" },
        { label: "C", text: "Hvítá" },
        { label: "D", text: "Elliðaár" },
      ],
      correctAnswer: "Þjórsá",
    },
    {
      questionNumber: 5,
      totalQuestions: 5,
      questionText: "Hvað heitir þjóðsaga um tröll?",
      options: [
        { label: "A", text: "Grýla og Leppalúði" },
        { label: "B", text: "Gilitrutt" },
        { label: "C", text: "Selkollu saga" },
        { label: "D", text: "Jónsmessunótt" },
      ],
      correctAnswer: "Grýla og Leppalúði",
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (text: string) => {
    if (!isAnswered) {
      setSelectedAnswer(text);
      setIsAnswered(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      alert("You’ve completed the quiz!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-between bg-black text-[#F1ECDE] h-screen">
      {/* Progress Bar */}
      <div className="flex-none">
        <ProgressBar
          questionNumber={currentQuestion.questionNumber}
          totalQuestions={currentQuestion.totalQuestions}
          questionText={currentQuestion.questionText}
        />
      </div>

      {/* Image */}
      <div className="w-full">
        <img
          src="/src/assets/resources/Quizpic-lagarfljot.svg"
          alt="Lagarfljot"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Options */}
      <div className="flex-grow w-full px-8 mb-20 grid grid-cols-1 gap-4">
        {currentQuestion.options.map((option) => (
          <QuizOption
            key={option.label}
            label={option.label}
            text={option.text}
            isSelected={selectedAnswer === option.text}
            isCorrect={option.text === currentQuestion.correctAnswer}
            showCorrectAnswer={
              isAnswered && option.text === currentQuestion.correctAnswer
            }
            isIncorrect={
              isAnswered &&
              selectedAnswer === option.text &&
              option.text !== currentQuestion.correctAnswer
            }
            onClick={() => handleOptionClick(option.text)}
          />
        ))}
      </div>

      {/* Next Arrow Button */}
      {isAnswered && (
        <div className="absolute bottom-12 right-6">
          <ArrowButton onClick={handleNextQuestion} />
        </div>
      )}
      {/* Reserve Space for Navbar */}
      <div className="h-16"></div>
    </div>
  );
};

export default QuizPage;
