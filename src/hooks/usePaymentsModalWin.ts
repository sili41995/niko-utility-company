import { useEffect, useState } from 'react';
import { ISubscriberAccount } from '@/types/subscriberAccount.types';
import { useSetSearchParams } from '@/hooks';
import { Messages, SearchParamsKeys } from '@/constants';
import { IUsePaymentsModalWin } from '@/types/hooks.types';
import { InputChangeEvent } from '@/types/types';
import debounce from 'debounce';
import subscriberAccountsService from '@/services/subscriberAccounts.service';
import { AxiosError } from 'axios';
import { toasts } from '@/utils';

const usePaymentsModalWin = (): IUsePaymentsModalWin => {
  const { updateSearchParams } = useSetSearchParams();
  const [data, setData] = useState<ISubscriberAccount | null>(null);

  const setSubscriberAccount = (data: ISubscriberAccount | null): void => {
    setData(data);
  };

  const onSubscriberAccountInputChange = async (e: InputChangeEvent) => {
    const { value: subscriberAccount } = e.target;
    const shouldSearch = subscriberAccount.length >= 5;

    if (!shouldSearch) {
      return;
    }

    setSubscriberAccount(null);

    try {
      const result =
        await subscriberAccountsService.fetchSubscriberAccountByNumber(
          subscriberAccount
        );
      toasts.successToast(Messages.subscriberAccountFetchSuccess);
      setSubscriberAccount(result);
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message;
        const isNotFoundErr =
          message.toLowerCase() === 'subscriber account was not found';
        const errorMessage = isNotFoundErr
          ? Messages.subscriberAccountNotFoundErr
          : message;
        toasts.errorToast(errorMessage);
      }
    }
  };

  useEffect(() => {
    return () => {
      updateSearchParams({ key: SearchParamsKeys.page, value: '' });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    subscriberAccount: data,
    onSubscriberAccountInputChange: debounce(
      onSubscriberAccountInputChange,
      300
    ),
  };
};

export default usePaymentsModalWin;
