import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, RadioGroup, Radio, FormControl } from "@mui/material";
import {
  checkAnswer,
  setNextQuestion,
  setPrevQuestion,
} from "../../store/questionsSlice";
import {
  QuestionNumber,
  QuestionText,
  Answers,
  Actions,
  NextButton,
  PrevButton,
  FormControlLabelStyle,
} from "./MainCardStyle";

const MainCard = ({ data }) => {
  const dispatch = useDispatch();
  const [answerId, setAnswerId] = useState(
    localStorage.getItem(`data[${data.id}]`) || "0"
  );
  const { total } = useSelector((state) => state.questions);

  useEffect(() => {
    if (localStorage.getItem(`data[${data.id}]`)) {
      setAnswerId(localStorage.getItem(`data[${data.id}]`));
    }
  }, [data.id]);

  const handleNextQuestion = () => {
    dispatch(setNextQuestion());
    dispatch(checkAnswer(parseInt(answerId)));
    setAnswerId("0");
    localStorage.setItem(`data[${data.id}]`, answerId);
  };

  const handlePrevQuestion = () => dispatch(setPrevQuestion());

  const handleChange = (event) => setAnswerId(event.target.value);

  const renderAnswers = data?.answers?.map((item) => (
    <FormControlLabelStyle
      key={item.id}
      value={item.id}
      control={<Radio />}
      label={item.text}
    />
  ));

  return (
    <Card sx={{ padding: "2rem 4rem", width: "50rem", maxWidth: "90vw" }}>
      <QuestionNumber>
        Question {data.id + 1} / {total}
      </QuestionNumber>
      <QuestionText>{data.question}</QuestionText>
      <Answers>
        <FormControl>
          <RadioGroup value={answerId} onChange={handleChange}>
            {renderAnswers}
          </RadioGroup>
        </FormControl>
      </Answers>
      <Actions>
        <PrevButton
          variant="contained"
          color="primary"
          onClick={handlePrevQuestion}
        >
          Back
        </PrevButton>
        <NextButton
          variant="contained"
          color="secondary"
          onClick={handleNextQuestion}
        >
          Next
        </NextButton>
      </Actions>
    </Card>
  );
};

export default MainCard;
