import { FC } from 'react';
import { IProps } from './PaymentsFilesPrivatbankModalWin.types';
import PaymentsFilesModalWin from '@/components/PaymentsFilesModalWin';
import {
  useUploadPaymentsBankFile,
  useDownloadPaymentsPrivatbankFile,
} from '@/hooks';
import { PaymentSourceType } from '@/types/paymentSource.types';

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
  } = useUploadPaymentsBankFile(PaymentSourceType.privatbank);

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
