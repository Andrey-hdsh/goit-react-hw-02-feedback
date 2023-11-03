import { TitleSection } from './departures_widget.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <TitleSection>{title}</TitleSection>
      {children}
    </>
  );
};
