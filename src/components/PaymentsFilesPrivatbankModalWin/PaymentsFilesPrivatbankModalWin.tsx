import { FC } from 'react';
import { IProps } from './PaymentsFilesPrivatbankModalWin.types';
import PaymentsFilesModalWin from '../PaymentsFilesModalWin';
import {
  useUploadPaymentsBankFile,
  useDownloadPaymentsPrivatbankFile,
} from '@/hooks';
import { PaymentSources } from '@/constants';

const PaymentsFilesPrivatbankModalWin: FC<IProps> = ({ setModalWinState }) => {
  const { isDownload, onDownloadPaymentsBtnClick } =
    useDownloadPaymentsPrivatbankFile();
  const {
    file,
    isUpload,
    onAttachFileInputChange,
    onUploadPaymentsBtnClick,
    resetFile,
    targetFileExtension,
  } = useUploadPaymentsBankFile(PaymentSources.privatbank);

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
      title={'Оплати Приватбанк:'}
    />
  );
};

export default PaymentsFilesPrivatbankModalWin;
