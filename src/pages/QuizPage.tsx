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
      imageSrc: "/src/assets/resources/Quizpic-lagarfljot.svg", // Add image path
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
      imageSrc: "/src/assets/resources/Quizpic-lagarfljot.svg",
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
      questionText: "Hvar er Skessuhellir?",
      imageSrc: "/src/assets/resources/Quizpic-lagarfljot.svg",
      options: [
        { label: "A", text: "Húsagili" },
        { label: "B", text: "Vestfjörðum" },
        { label: "C", text: "Barðastrandarsýslu" },
        { label: "D", text: "Heiðnabjargi" },
      ],
      correctAnswer: "Húsagili",
    },
    {
      questionNumber: 4,
      totalQuestions: 5,
      questionText: "Af hverju segir Djákninn á Myrká Garún en ekki Guðrún?",
      imageSrc: "/src/assets/resources/MyrkaQuiz.svg",
      options: [
        { label: "A", text: "Hún hét Garún" },
        { label: "B", text: "Hann gat ekki sagt guð" },
        { label: "C", text: "Hann var undir álögum" },
        { label: "D", text: "Ekkert að ofan" },
      ],
      correctAnswer: "Hann gat ekki sagt guð",
    },
    {
      questionNumber: 5,
      totalQuestions: 5,
      questionText: "Hvað heitir kerlingin sem vann ullina?",
      imageSrc: "/src/assets/resources/Quizpic-lagarfljot.svg",
      options: [
        { label: "A", text: "Grýla" },
        { label: "B", text: "Gilitrutt" },
        { label: "C", text: "Trunta" },
        { label: "D", text: "Svanhvít" },
      ],
      correctAnswer: "Gilitrutt",
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
    <div className="flex flex-col items-left justify-between bg-black text-[#F1ECDE] h-screen">
      {/* Progress Bar */}
      <div className="flex-none px-8">
        <ProgressBar
          questionNumber={currentQuestion.questionNumber}
          totalQuestions={currentQuestion.totalQuestions}
        />
      </div>

      {/* Question Text */}
      <h2 className="pt-5 px-8 font-glare text-3xl text-[#F1ECDE] text-left">
        {currentQuestion.questionText}
      </h2>

      {/* Dynamic Image */}
      <div className="w-full">
        <img
          src={currentQuestion.imageSrc} // Use dynamic image source
          alt={`Question ${currentQuestion.questionNumber}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Options */}
      <div className="w-full mb-20 px-8 grid grid-cols-1 gap-4">
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
        <div className="absolute mb-10 bottom-12 right-6">
          <ArrowButton onClick={handleNextQuestion} />
        </div>
      )}
      {/* Reserve Space for Navbar */}
      <div className="h-16"></div>
    </div>
  );
};

export default QuizPage;
