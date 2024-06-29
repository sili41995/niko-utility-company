import { OnBtnClickFunc } from '@/types/types';
import { ReactNode } from 'react';

export interface IProps {
  marginTop?: number;
  title: string;
  children: ReactNode;
  onCloseBtnClick: OnBtnClickFunc;
}

export interface IStyledProps {
  marginTop?: number;
}
