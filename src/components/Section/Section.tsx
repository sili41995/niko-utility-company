import { FC } from 'react';
import { IProps } from './Section.types';
import { StyledSection } from './Section.styled';

const Section: FC<IProps> = ({ paddingTop, paddingBottom, children }) => (
  <StyledSection paddingTop={paddingTop} paddingBottom={paddingBottom}>
    {children}
  </StyledSection>
);

export default Section;
