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
import useSetSearchParams from './useSetSearchParams';
import { GeneralParams, SearchParamsKeys } from '@/constants';

const useSubscriberAccountsPage = (): IUseSubscriberAccountsPage => {
  const [showModalWin, setShowModalWin] = useState<boolean>(false);
  const { searchParams } = useSetSearchParams();
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
  const page = searchParams.get(SearchParamsKeys.page);
  const limit = Number(GeneralParams.recordLimit);

  useEffect(() => {
    const targetPage = page ? Number(page) : undefined;
    fetchSubscriberAccounts({ page: targetPage, limit });
  }, [fetchSubscriberAccounts, limit, page]);

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
    isLoading,
  };
};

export default useSubscriberAccountsPage;
