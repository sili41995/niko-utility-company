import { useState } from 'react';
import useAttachCsvFile from './useAttachCsvFile';
import {
  convertStringsToPaymentsBank,
  makeBlur,
  readPaymentsDataFromCsv,
  toasts,
} from '@/utils';
import { Messages, PaymentSources } from '@/constants';
import { BtnClickEvent } from '@/types/types';
import { IUseUploadPaymentsFile } from '@/types/hooks.types';
import accountingService from '@/services/accounting.service';

const useUploadPaymentsBankFile = (
  source: PaymentSources
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
        source,
      });
      await accountingService.addPayments(payments);
      toasts.successToast(Messages.paymentsAddSuccess);
    } catch (error) {
      toasts.errorToast(Messages.invalidDataErr);
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
