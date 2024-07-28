import { Messages } from '@/constants';
import { useAttachCsvFile } from '@/hooks';
import accountingService from '@/services/accounting.service';
import { BtnClickEvent } from '@/types/types';
import {
  convertStringsToPaymentsPostage,
  makeBlur,
  readPaymentsDataFromCsv,
  toasts,
} from '@/utils';
import { FC, useState } from 'react';
import ActionBtn from '../ActionBtn';
import AttachFileInput from '../AttachFileInput';

const UploadPaymentsPostageFile: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { file, onInputChange, targetFileExtension, resetFile } =
    useAttachCsvFile();
  const disabledActionBtn = Boolean(!file);

  const uploadPayments = async (file: File) => {
    setIsLoading(true);

    try {
      const strings = await readPaymentsDataFromCsv(file);
      const payments = await convertStringsToPaymentsPostage(strings);
      await accountingService.addPayments(payments);
      toasts.successToast(Messages.paymentsAddSuccess);
    } catch (error) {
      toasts.errorToast(Messages.invalidDataErr);
    } finally {
      setIsLoading(false);
    }
  };

  const onUploadPaymentsBtnClick = (e: BtnClickEvent): void => {
    makeBlur(e.currentTarget);
    file && uploadPayments(file);
  };

  return (
    <>
      <AttachFileInput
        targetFileExtension={targetFileExtension}
        onInputChange={onInputChange}
        file={file}
        resetFile={resetFile}
      />
      <ActionBtn
        title='Завантажити'
        isLoading={isLoading}
        onBtnClick={onUploadPaymentsBtnClick}
        disabled={disabledActionBtn}
      />
    </>
  );
};

export default UploadPaymentsPostageFile;
