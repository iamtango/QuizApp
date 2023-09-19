import { useEffect, useRef, useState } from "react";

const AnswerTimer = ({ duration, onTimeUp }) => {
  const [counter, setCounter] = useState(0);
  const [progressLoad, setProgressLoad] = useState(0);
  const intervalref = useRef;
  useEffect(() => {
    intervalref.current = setInterval(() => {
      setCounter((cur) => cur + 1);
    }, 1000);

    return () => clearInterval(intervalref.current);
  }, []);

  useEffect(() => {
    setProgressLoad(100 * (counter / duration));
    if (counter === duration) {
      clearInterval(intervalref.current);
      setTimeout(() => {
        onTimeUp();
      }, 1000);
    }
  }, [counter]);

  return (
    <div className="absolute top-0 left-0 w-full border-b-1 bg-gray-500 ">
      <div
        className="duration-1000  h-2 ease-linear bg-red-500"
        style={{
          width: `${progressLoad}%`,
          backgroundColor: `${
            progressLoad < 40 ? "pink" : progressLoad < 70 ? "orange" : "red"
          }`,
        }}></div>
    </div>
  );
};
export default AnswerTimer;
