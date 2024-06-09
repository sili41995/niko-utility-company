import { FC } from 'react';
import { TextAreaWrap, Label, StyledTextArea } from './TextArea.styled';
import { IProps } from './TextArea.types';

const Input: FC<IProps> = ({ settings, label }) => {
  return (
    <TextAreaWrap>
      <Label>{label}</Label>
      <StyledTextArea {...settings} />
    </TextAreaWrap>
  );
};

export default Input;
