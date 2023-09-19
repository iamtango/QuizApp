import { useState } from "react";
import { resultInitialState } from "../constant";
import AnswerTimer from "./AnswerTimer";
import { useParams } from "react-router-dom";

const Quiz = ({ questions }) => {
  const { username } = useParams();
  // console.log("name --", username)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitialState);
  const [showResult, setShowResult] = useState(false);
  const [showAnswerTimer, setShowAnswerTimer] = useState(true);

  const { question, choices, correctAnswer } = questions[currentQuestion];

  const onAnswerClick = (answer, index) => {
    console.log(answer);
    console.log(index);
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const onClickNext = (finalAnswer) => {
    setAnswerIdx(null);
    setShowAnswerTimer(false);
    setResult((prev) =>
      finalAnswer
        ? {
            ...prev,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );

    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
    setTimeout(() => {
      setShowAnswerTimer(true);
    });
  };

  const onTryAgain = () => {
    setResult(resultInitialState);
    setShowResult(false);
  };
  const handleTimeUp = () => {
    setAnswer(false);
    onClickNext(false);
  };

  return (
    <>
      {!showResult ? (
        <>
          <div className="p-2 m-1 font-serif font-bold d-flex justify-end">
            <p className="p-2 text-3xl text-yellow-50">Hi {username}</p>
          </div>
          <div className="bg-white px-8 w-{500px} pl-7 pr-14 box-border  w-auto p-4 border-4 relative">
            {showAnswerTimer && (
              <AnswerTimer duration={10} onTimeUp={handleTimeUp} />
            )}
            <div
              className="  flex justify-center  mt-{100px}
     bg-white px-8 w-{500px} pl-7 pr-14 box-border  w-auto p-4 border-4 ">
              <span className="text-3xl font-[500] text-blue-600">
                {currentQuestion + 1}
              </span>
              <span className="text-lg font-[500] text-gray-600">
                / {questions.length}
              </span>
              <h2 className="text-2xl font-semibold pl-8 ">{question}</h2>
            </div>
            <div className="flex justify-center ">
              <ul className="mt-9 -ml-9 font[500] font-semibold justify-items-start ">
                {choices.map((choice, index) => (
                  <li key={choice} className="text-lg border-spacing-4 p-3 ">
                    <input
                      onClick={() => onAnswerClick(choice, index)}
                      type="radio"
                      name="options"
                      key={choice}
                      className=" cursor-pointer"
                    />
                    {choice}
                  </li>
                ))}
              </ul>
            </div>
            <div className="font-semibold flex justify-center ">
              <button
                className="border-black border-2 m-1 p-1 rounded-lg bg-emerald-500 "
                onClick={() => onClickNext(answer)}
                disabled={answerIdx === null}>
                {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="p-2 m-1 font-serif font-bold d-flex justify-end">
            <p className="p-2 text-3xl text-yellow-50">Hi {username}</p>
          </div>
          <div className="bg-white px-8 pl-7 pr-14 box-border  w-auto p-4 border-4 text-center font-[500] text-xl  ">
            <h3 className="text-4xl font-serif font-bold  text-red-700">
              Result
            </h3>
            <p>
              Total Questions:<span>{questions.length}</span>
            </p>
            <p>
              Correct Answers:<span>{result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers:<span>{result.wrongAnswers}</span>
            </p>
            <button
              className="border-black border-2 m-1 p-1 rounded-lg bg-emerald-500"
              onClick={onTryAgain}>
              Try Again
            </button>
          </div>
        </>
      )}
    </>
  );
};
export default Quiz;
