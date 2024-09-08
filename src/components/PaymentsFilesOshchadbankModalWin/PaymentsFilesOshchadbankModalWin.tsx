import { FC } from 'react';
import { IProps } from './PaymentsFilesOshchadbankModalWin.types';
import PaymentsFilesModalWin from '@/components/PaymentsFilesModalWin';
import {
  useUploadPaymentsBankFile,
  useDownloadPaymentsOshchadbankFile,
} from '@/hooks';
import { PaymentSourceType } from '@/types/paymentSource.types';

const PaymentsFilesOshchadbankModalWin: FC<IProps> = ({ setModalWinState }) => {
  const { isDownload, onDownloadPaymentsBtnClick } =
    useDownloadPaymentsOshchadbankFile();
  const {
    file,
    isUpload,
    onAttachFileInputChange,
    onUploadPaymentsBtnClick,
    resetFile,
    targetFileExtension,
  } = useUploadPaymentsBankFile(PaymentSourceType.oshchadbank);

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
      title={'Оплати Ощадбанк:'}
    />
  );
};

export default PaymentsFilesOshchadbankModalWin;
