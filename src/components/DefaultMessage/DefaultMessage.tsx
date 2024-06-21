import { FC } from 'react';
import { IProps } from './DefaultMessage.types';
import { Message } from './DefaultMessage.styled';

const DefaultMessage: FC<IProps> = ({ message }) => (
  <Message>{message}</Message>
);

export default DefaultMessage;
