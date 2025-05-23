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
  max,
  horizontal = false,
  width,
  offBorderRadius = false,
  name,
  onChange,
  btn,
  value,
  inputRef,
  disabled = false,
}) => {
  const input = (
    <StyledInput
      type={type}
      formType={formType}
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      step={step}
      min={min}
      max={max}
      width={width}
      offBorderRadius={offBorderRadius}
      name={name}
      onChange={onChange}
      ref={inputRef}
      disabled={disabled}
      {...settings}
    />
  );

  const styledInput =
    icon || btn ? (
      <Container>
        {input}
        {icon && icon}
        {btn && btn}
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
