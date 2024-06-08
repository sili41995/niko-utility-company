import { Func } from '@/types/types';
import { ReactNode } from 'react';

export interface IProps {
  title: string;
  children: ReactNode;
  onCloseBtnClick: Func;
}
