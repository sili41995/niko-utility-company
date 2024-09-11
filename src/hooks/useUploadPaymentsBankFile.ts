import { useState } from 'react';
import useAttachCsvFile from './useAttachCsvFile';
import {
  convertStringsToPaymentsBank,
  makeBlur,
  readPaymentsDataFromCsv,
  toasts,
} from '@/utils';
import { Messages, ErrorMessages } from '@/constants';
import { BtnClickEvent } from '@/types/types';
import { IUseUploadPaymentsFile } from '@/types/hooks.types';
import accountingService from '@/services/accounting.service';
import { PaymentSourceType } from '@/types/paymentSource.types';

const useUploadPaymentsBankFile = (
  name: PaymentSourceType
): IUseUploadPaymentsFile => {
  const [isUpload, setIsUpload] = useState<boolean>(false);
  const { file, onAttachFileInputChange, targetFileExtension, resetFile } =
    useAttachCsvFile();

  const uploadPayments = async (file: File) => {
    setIsUpload(true);

    try {
      const strings = await readPaymentsDataFromCsv(file);
      const payments = await convertStringsToPaymentsBank({
        data: strings,
        name,
      });
      await accountingService.addPayments(payments);
      toasts.successToast(Messages.addPaymentsSuccess);
    } catch (error) {
      toasts.errorToast(ErrorMessages.invalidDataErr);
    } finally {
      setIsUpload(false);
    }
  };

  const onUploadPaymentsBtnClick = (e: BtnClickEvent): void => {
    makeBlur(e.currentTarget);
    file && uploadPayments(file);
  };

  return {
    targetFileExtension,
    onAttachFileInputChange,
    file,
    resetFile,
    isUpload,
    onUploadPaymentsBtnClick,
  };
};

export default useUploadPaymentsBankFile;
