import { BtnClickEvent } from '@/types/types';
import { makeBlur, saveFileToCsv, toasts } from '@/utils';
import accountingService from '@/services/accounting.service';
import { Messages } from '@/constants';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { IUseFetchFile } from '@/types/hooks.types';

const usePayOshchadbankModalWin = (): IUseFetchFile => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchPayments = async () => {
    setIsLoading(true);

    try {
      const result = await accountingService.fetchPaymentsBySourceOshchadbank();
      saveFileToCsv({ data: result, fileName: 'payments-oshchadbank.xlsx' });
      toasts.successToast(Messages.fetchPaymentsSuccess);
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message;
        toasts.errorToast(message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onActionBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    fetchPayments();
  };

  return { isLoading, onActionBtnClick };
};

export default usePayOshchadbankModalWin;
