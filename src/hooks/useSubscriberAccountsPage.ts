import { useSubscriberAccountsStore } from '@/store/store';
import {
  selectCount,
  selectError,
  selectFetchSubscriberAccounts,
  selectIsLoaded,
  selectIsLoading,
  selectSubscriberAccounts,
} from '@/store/subscriberAccounts/selectors';
import { IUseSubscriberAccountsPage } from '@/types/hooks.types';
import { useEffect, useState } from 'react';

const useSubscriberAccountsPage = (): IUseSubscriberAccountsPage => {
  const [showModalWin, setShowModalWin] = useState<boolean>(false);
  const subscriberAccounts = useSubscriberAccountsStore(
    selectSubscriberAccounts
  );
  const count = subscriberAccounts.length;
  const totalCount = useSubscriberAccountsStore(selectCount);
  const fetchSubscriberAccounts = useSubscriberAccountsStore(
    selectFetchSubscriberAccounts
  );
  const isLoading = useSubscriberAccountsStore(selectIsLoading);
  const isLoaded = useSubscriberAccountsStore(selectIsLoaded);
  const isLoadingData = !isLoaded && isLoading;
  const showSubscriberAccountsTable = Boolean(
    isLoaded && totalCount && !!~totalCount
  );
  const error = useSubscriberAccountsStore(selectError);

  useEffect(() => {
    fetchSubscriberAccounts();
  }, [fetchSubscriberAccounts]);

  const setModalWinState = () => {
    setShowModalWin((prevState) => !prevState);
  };

  return {
    isLoadingData,
    showSubscriberAccountsTable,
    count,
    totalCount,
    error,
    setModalWinState,
    showModalWin,
  };
};

export default useSubscriberAccountsPage;
