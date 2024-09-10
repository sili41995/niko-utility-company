import { BtnClickEvent } from '@/types/types';
import { makeBlur, toasts, saveFileToCsv } from '@/utils';
import accountingService from '@/services/accounting.service';
import { Messages } from '@/constants';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { IUseFetchFile } from '@/types/hooks.types';

const usePayAbankModalWin = (): IUseFetchFile => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchPayments = async () => {
    setIsLoading(true);

    try {
      const result = await accountingService.fetchPaymentsBySourceAbank();
      saveFileToCsv({ data: result, fileName: 'payments-abank.csv' });
      toasts.successToast(Messages.getPaymentsSuccess);
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

export default usePayAbankModalWin;
