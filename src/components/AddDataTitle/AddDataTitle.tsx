import { FC } from 'react';
import { IProps } from './AddDataTitle.types';
import { Title } from './AddDataTitle.styled';

const AddDataTitle: FC<IProps> = ({ title }) => <Title>{title}</Title>;

export default AddDataTitle;
