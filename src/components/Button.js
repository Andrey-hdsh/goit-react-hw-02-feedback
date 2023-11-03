import { StyledButton } from './departures_widget.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map(option => (
        <StyledButton key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </StyledButton>
      ))}
    </>
  );
};
