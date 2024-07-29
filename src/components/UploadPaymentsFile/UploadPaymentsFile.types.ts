import { InputChangeFunc, OnBtnClickFunc } from '@/types/types';

export interface IProps {
  targetFileExtension: string;
  onInputChange: InputChangeFunc;
  file: File | null;
  resetFile: OnBtnClickFunc;
  isLoading: boolean;
  onUploadPaymentsBtnClick: OnBtnClickFunc;
}
