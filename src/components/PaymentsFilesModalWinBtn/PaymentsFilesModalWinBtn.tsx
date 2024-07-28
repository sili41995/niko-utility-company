import { FC } from 'react';
import { IProps } from './PaymentsFilesModalWinBtn.types';
import { Container, Title } from './PaymentsFilesModalWinBtn.styled';

const PaymentsFilesModalWinBtn: FC<IProps> = ({
  type,
  checked,
  value,
  onChange,
  name,
  title,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <input
        type={type}
        checked={checked}
        value={value}
        onChange={onChange}
        name={name}
      />
    </Container>
  );
};

export default PaymentsFilesModalWinBtn;
