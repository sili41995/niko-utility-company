import { FC } from 'react';
import { Container, InputWrap, Label, StyledInput } from './Input.styled';
import { IProps } from './Input.types';

const Input: FC<IProps> = ({
  settings,
  icon,
  type,
  formType,
  placeholder,
  label,
  defaultValue,
  accent = false,
  step,
  min = 0,
  horizontal = false,
  width,
  offBorderRadius = false,
  name,
  onChange,
}) => {
  const input = (
    <StyledInput
      type={type}
      formType={formType}
      placeholder={placeholder}
      defaultValue={defaultValue}
      step={step}
      min={min}
      width={width}
      offBorderRadius={offBorderRadius}
      name={name}
      onChange={onChange}
      {...settings}
    />
  );

  const styledInput = icon ? (
    <Container>
      {input}
      {icon}
    </Container>
  ) : (
    input
  );

  return label ? (
    <InputWrap horizontal={horizontal}>
      <Label accent={accent}>{label}</Label>
      {styledInput}
    </InputWrap>
  ) : (
    styledInput
  );
};

export default Input;
