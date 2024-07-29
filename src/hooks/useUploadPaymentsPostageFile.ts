import { useState } from 'react';
import useAttachCsvFile from './useAttachCsvFile';
import {
  convertStringsToPaymentsPostage,
  makeBlur,
  readPaymentsDataFromCsv,
  toasts,
} from '@/utils';
import accountingService from '@/services/accounting.service';
import { Messages } from '@/constants';
import { BtnClickEvent } from '@/types/types';
import { IUseUploadPaymentsFile } from '@/types/hooks.types';

const useUploadPaymentsPostageFile = (): IUseUploadPaymentsFile => {
  const [isUpload, setIsUpload] = useState<boolean>(false);
  const { file, onAttachFileInputChange, targetFileExtension, resetFile } =
    useAttachCsvFile();

  const uploadPayments = async (file: File) => {
    setIsUpload(true);

    try {
      const strings = await readPaymentsDataFromCsv(file);
      const payments = await convertStringsToPaymentsPostage(strings);
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

export default useUploadPaymentsPostageFile;
