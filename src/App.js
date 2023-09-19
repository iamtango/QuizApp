import Quiz from "./components/Quiz";
import Username from "./components/Username";
import { jsQuiz } from "./constant";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div
        className="text-2x  bg-red-200 bg-gradient-to-r from-indigo-500 from-10%
     via-sky-500 via-30%
      to-emerald-500 to-90% h-screen m-auto p-8">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Username />} />
            <Route
              path="quiz/:username"
              element={<Quiz questions={jsQuiz.questions} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
export default App;
