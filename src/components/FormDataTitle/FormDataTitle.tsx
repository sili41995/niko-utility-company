import { FC } from 'react';
import { IProps } from './FormDataTitle.types';
import { Title } from './FormDataTitle.styled';

const FormDataTitle: FC<IProps> = ({ title }) => <Title>{title}</Title>;

export default FormDataTitle;
