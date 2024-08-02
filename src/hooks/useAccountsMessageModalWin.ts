import { BtnClickEvent } from '@/types/types';
import { makeBlur, saveFileToPdf, toasts } from '@/utils';
import accountingService from '@/services/accounting.service';
import { Messages } from '@/constants';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { IUseFetchFile } from '@/types/hooks.types';

const useAccountsMessageModalWin = (): IUseFetchFile => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchInvoices = async () => {
    setIsLoading(true);

    try {
      const result = await accountingService.fetchInvoices();
      saveFileToPdf({ data: result, fileName: 'invoices.pdf' });
      toasts.successToast(Messages.fetchInvoicesSuccess);
    } catch (error) {
      if (error instanceof AxiosError) {
        toasts.errorToast(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onActionBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    fetchInvoices();
  };

  return { isLoading, onActionBtnClick };
};

export default useAccountsMessageModalWin;
