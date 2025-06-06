import { Messages } from '@/constants';
import accountingService from '@/services/accounting.service';
import { IUseDownloadPaymentsFile } from '@/types/hooks.types';
import { BtnClickEvent } from '@/types/types';
import { makeBlur, saveFileToCsv, toasts } from '@/utils';
import { AxiosError } from 'axios';
import { useState } from 'react';

const useDownloadPaymentsOshchadbankFile = (): IUseDownloadPaymentsFile => {
  const [isDownload, setIsDownload] = useState<boolean>(false);

  const downloadPayments = async () => {
    setIsDownload(true);

    try {
      const result = await accountingService.fetchPaymentsBySourceOshchadbank();
      saveFileToCsv({ data: result, fileName: 'payments-oshchadbank.csv' });
      toasts.successToast(Messages.getPaymentsSuccess);
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message;
        toasts.errorToast(message);
      }
    } finally {
      setIsDownload(false);
    }
  };

  const onDownloadPaymentsBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    downloadPayments();
  };

  return { isDownload, onDownloadPaymentsBtnClick };
};

export default useDownloadPaymentsOshchadbankFile;
