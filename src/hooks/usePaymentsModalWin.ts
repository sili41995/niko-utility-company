import { useEffect, useState } from 'react';
import { ISubscriberAccount } from '@/types/subscriberAccount.types';
import { useSetSearchParams } from '@/hooks';
import { SearchParamsKeys } from '@/constants';
import { IUsePaymentsModalWin } from '@/types/hooks.types';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';

const usePaymentsModalWin = (): IUsePaymentsModalWin => {
  const { updateSearchParams } = useSetSearchParams();
  const [data, setData] = useState<ISubscriberAccount | null>(null);

  const setSubscriberAccount = (data: ISubscriberAccount): void => {
    setData(data);
  };

  const resetSubscriberAccount = (e: BtnClickEvent): void => {
    makeBlur(e.currentTarget);
    setData(null);
  };

  useEffect(() => {
    return () => {
      updateSearchParams({ key: SearchParamsKeys.page, value: '' });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    subscriberAccount: data,
    setSubscriberAccount,
    resetSubscriberAccount,
  };
};

export default usePaymentsModalWin;
