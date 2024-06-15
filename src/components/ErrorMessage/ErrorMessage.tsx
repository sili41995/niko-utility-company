import { FC } from 'react';
import { IProps } from './ErrorMessage.types';
import { Message } from './ErrorMessage.styled';

const ErrorMessage: FC<IProps> = ({ error }) => <Message>{error}</Message>;

export default ErrorMessage;
