import { useEffect, useState } from 'react';
import { ISubscriberAccount } from '@/types/subscriberAccount.types';
import { useSetSearchParams } from '@/hooks';
import { SearchParamsKeys } from '@/constants';
import { IUsePaymentsModalWin } from '@/types/hooks.types';

const usePaymentsModalWin = (): IUsePaymentsModalWin => {
  const { updateSearchParams } = useSetSearchParams();
  const [data, setData] = useState<ISubscriberAccount | null>(null);

  const setSubscriberAccount = (data: ISubscriberAccount): void => {
    setData(data);
  };

  useEffect(() => {
    return () => {
      updateSearchParams({ key: SearchParamsKeys.page, value: '' });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { subscriberAccount: data, setSubscriberAccount };
};

export default usePaymentsModalWin;
