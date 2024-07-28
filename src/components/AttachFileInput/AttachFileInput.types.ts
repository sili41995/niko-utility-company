import { InputChangeFunc, OnBtnClickFunc } from '@/types/types';

export interface IProps {
  targetFileExtension: string;
  file: File | null;
  onInputChange: InputChangeFunc;
  resetFile: OnBtnClickFunc;
}
