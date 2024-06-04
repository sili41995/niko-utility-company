import { FC } from 'react';
import { Container, StyledInput } from './Input.styled';
import { IProps } from './Input.types';

const Input: FC<IProps> = ({ settings, icon, type, formType }) => {
  const input = <StyledInput type={type} formType={formType} {...settings} />;

  return icon ? (
    <Container>
      {input}
      {icon}
    </Container>
  ) : (
    input
  );
};

export default Input;
