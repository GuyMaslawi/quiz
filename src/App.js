import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./AppStyle";
import MainCard from "./components/main-card/MainCard";
import { resetQuiz } from "./store/questionsSlice";

const App = () => {
  const { quizOver, score, total, currentQuestion } = useSelector(
    (state) => state.questions
  );
  const dispatch = useDispatch();

  const renderCard = <MainCard data={currentQuestion} />;

  const handleResetQuiz = () => dispatch(resetQuiz());

  return (
    <Wrapper>
      {quizOver ? (
        <div style={{ textAlign: "center" }}>
          <div style={{ marginBottom: "2rem" }}>
            Your Score is: {score}/{total}
          </div>
          <button
            style={{ fontSize: "1.5rem", height: "4rem", width: "25rem" }}
            onClick={handleResetQuiz}
          >
            Start New Quiz
          </button>
        </div>
      ) : (
        renderCard
      )}
    </Wrapper>
  );
};

export default App;
