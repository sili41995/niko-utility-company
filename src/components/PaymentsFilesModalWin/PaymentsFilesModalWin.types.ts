import { Func, InputChangeFunc, OnBtnClickFunc } from '@/types/types';

export interface IProps {
  setModalWinState: Func;
  title: string;
  targetFileExtension: string;
  file: File | null;
  isUpload: boolean;
  isDownload: boolean;
  onAttachFileInputChange: InputChangeFunc;
  onUploadPaymentsBtnClick: OnBtnClickFunc;
  resetFile: OnBtnClickFunc;
  onDownloadPaymentsBtnClick: OnBtnClickFunc;
}
