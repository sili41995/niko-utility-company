import { OnBtnClickFunc } from '@/types/types';

export interface IProps {
  title: string;
  isLoading: boolean;
  onBtnClick: OnBtnClickFunc;
  disabled?: boolean;
}

export interface IStyledProps {
  disabledBnt: boolean;
}
