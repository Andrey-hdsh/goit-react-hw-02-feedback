import { StyledTextFeedback } from './departures_widget.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StyledTextFeedback>Good: {good}</StyledTextFeedback>
      <StyledTextFeedback>Neutral: {neutral}</StyledTextFeedback>
      <StyledTextFeedback>Bad: {bad}</StyledTextFeedback>
      <StyledTextFeedback>Total: {total}</StyledTextFeedback>
      {total > 0 && (
        <StyledTextFeedback>
          Positive feedback: {positivePercentage}%
        </StyledTextFeedback>
      )}
    </>
  );
};
