import { FC } from 'react';
import { IProps } from './PaymentsFilesPostageModalWin.types';
import PaymentsFilesModalWin from '../PaymentsFilesModalWin';
import {
  useUploadPaymentsPostageFile,
  useDownloadPaymentsPostageFile,
} from '@/hooks';

const PaymentsFilesPostageModalWin: FC<IProps> = ({ setModalWinState }) => {
  const { isDownload, onDownloadPaymentsBtnClick } =
    useDownloadPaymentsPostageFile();
  const {
    file,
    isUpload,
    onAttachFileInputChange,
    onUploadPaymentsBtnClick,
    resetFile,
    targetFileExtension,
  } = useUploadPaymentsPostageFile();

  return (
    <PaymentsFilesModalWin
      file={file}
      isDownload={isDownload}
      isUpload={isUpload}
      onAttachFileInputChange={onAttachFileInputChange}
      onDownloadPaymentsBtnClick={onDownloadPaymentsBtnClick}
      onUploadPaymentsBtnClick={onUploadPaymentsBtnClick}
      resetFile={resetFile}
      setModalWinState={setModalWinState}
      targetFileExtension={targetFileExtension}
      title={'Оплати Пошта:'}
    />
  );
};

export default PaymentsFilesPostageModalWin;
