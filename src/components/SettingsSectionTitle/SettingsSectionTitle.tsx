import { FC } from 'react';
import { IProps } from './SettingsSectionTitle.types';
import { Title } from './SettingsSectionTitle.styled';

const SettingsSectionTitle: FC<IProps> = ({ title }) => <Title>{title}</Title>;

export default SettingsSectionTitle;
