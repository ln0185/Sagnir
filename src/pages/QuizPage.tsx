import { useState } from "react";
import QuizOption from "../components/QuizOption/QuizOption";
import ProgressBar from "../components/QuizProgressBar/ProgressBar";
import ArrowButton from "../components/ArrowButton/ArrowButton";
import Quiz1 from "../assets/resources/Quizpic-lagarfljot.svg";
import Quiz2 from "../assets/resources/grylaa.svg";
import Quiz3 from "../assets/resources/quizhellir.svg";
import Quiz4 from "../assets/resources/djakninn.svg";
import Quiz5 from "/src/assets/resources/quizalfarsvg.svg";

export const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false); 

  const questions = [
    {
      questionNumber: 1,
      totalQuestions: 5,
      questionText: "Hvar á landinu er Lagarfljót?",
      imageSrc: Quiz1, 
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
      questionText: "Hvað á grýla gamla mörg börn?",
      imageSrc: Quiz2,
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
      questionText: "Hvar á landinu er Skessuhellir?",
      imageSrc: Quiz3,
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
      questionText: "Hví segir Djákninn Garún?",
      imageSrc: Quiz4,
      options: [
        { label: "A", text: "Hún hét Garún" },
        { label: "B", text: "Hann gat ekki sagt guðrún" },
        { label: "C", text: "Hann var undir álögum" },
        { label: "D", text: "Ekkert að ofan" },
      ],
      correctAnswer: "Hann gat ekki sagt guðrún",
    },
    {
      questionNumber: 5,
      totalQuestions: 5,
      questionText: "Hvað heitir kerlingin sem vann ullina?",
      imageSrc: Quiz5,
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
      setIsQuizCompleted(true);
    }
  };

  const closeModal = () => {
    setIsQuizCompleted(false);
  };

  return (
    <div className="flex items-center justify-center bg-sagnir-100 text-sagnir-200 h-auto w-screen">
      <div className="flex flex-col w-full max-w-4xl">
        {/* Progress Bar */}
        <div className="flex-none mx-8 mt-12 mb-6 md:mt-15">
          <ProgressBar
            questionNumber={currentQuestion.questionNumber}
            totalQuestions={currentQuestion.totalQuestions}
          />
        </div>

        {/* Question Text */}
        <h2 className="mx-8 font-glare text-4xl text-sagnir-200 text-left">
          {currentQuestion.questionText}
        </h2>

        {/* Dynamic Image */}
        <div className="w-full flex">
          <img
            src={currentQuestion.imageSrc}
            alt={`Question ${currentQuestion.questionNumber}`}
            className="pt-5 w-full justify-center h-[300px] md:w-[950px] md:h-[480px]"
          />
        </div>

        {/* Options */}
        <div className="w-full justify-content px-8 mb-16 mt-5 grid grid-cols-1 gap-4">
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
          <div className="absolute bottom-[3.5rem] right-[1.25rem] md:right-[21rem] md:bottom-[3.5rem]">
            <ArrowButton onClick={handleNextQuestion} />
          </div>
        )}

        {/* Reserve Space for Navbar */}
        <div className="h-20"></div>
      </div>

      {/* Modal for Quiz Completion */}
      {isQuizCompleted && (
        <div className="fixed inset-0 flex items-center justify-center bg-sagnir-100 bg-opacity-50">
          <div className="bg-sagnir-200 text-sagnir-100 rounded-lg p-8 shadow-lg w-80 text-center">
            <h2 className="font-glare text-2xl mb-4">Allt búið í dag!</h2>
            <p className="font-glare text-lg mb-6">Vel gert meistari</p>
            <button
              onClick={closeModal}
              className="font-glare px-4 py-2 bg-sagnir-100 text-sagnir-200 rounded-lg"
            >
              Loka
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
