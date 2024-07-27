import { FC } from 'react';
import { IProps } from './SubscriberAccountInfoModalWinBtn.types';
import { Container, Title } from './SubscriberAccountInfoModalWinBtn.styled';

const SubscriberAccountInfoModalWinBtn: FC<IProps> = ({
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

export default SubscriberAccountInfoModalWinBtn;
