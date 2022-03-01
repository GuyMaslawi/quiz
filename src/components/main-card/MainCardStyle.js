import { styled } from "@mui/system";
import { Button, FormControlLabel } from "@mui/material";

export const QuestionNumber = styled("h2")({
  fontSize: "2.5rem",
});

export const QuestionText = styled("h2")({
  fontSize: "2rem",
  marginBottom: "2rem",
});

export const Answers = styled("div")({
  fontSize: "1.5rem",
});

export const ButtonStyle = styled(Button)({
  width: "100%",
  height: "4rem",
  borderRadius: "2rem",
  fontSize: "1.5rem",
});

export const Actions = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

export const ActionButton = styled(Button)({
  width: "fit-content",
  height: "4rem",
  borderRadius: '.8rem',
  fontSize: '1.4rem'
});

export const NextButton = styled(ActionButton)({
  marginLeft: '1rem'
});

export const PrevButton = styled(ActionButton)({});

export const FormControlLabelStyle = styled(FormControlLabel)({
  span: {
    fontSize: "1.5rem",
  },
});
