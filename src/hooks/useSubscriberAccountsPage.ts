import { useSubscriberAccountsStore } from '@/store/store';
import {
  selectTotalCount,
  selectError,
  selectFetchSubscriberAccounts,
  selectIsLoaded,
  selectIsLoading,
  selectSubscriberAccounts,
  selectFilteredCount,
} from '@/store/subscriberAccounts/selectors';
import { IUseSubscriberAccountsPage } from '@/types/hooks.types';
import { useEffect, useState } from 'react';
import useFilterSearchParams from './useFilterSearchParams';
// import usePageTitle from './usePageTitle';

const useSubscriberAccountsPage = (): IUseSubscriberAccountsPage => {
  const [showModalWin, setShowModalWin] = useState<boolean>(false);
  const subscriberAccounts = useSubscriberAccountsStore(
    selectSubscriberAccounts
  );
  const count = subscriberAccounts.length;
  const totalCount = useSubscriberAccountsStore(selectTotalCount);
  const filteredCount = useSubscriberAccountsStore(selectFilteredCount);
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
  const {
    account,
    apartment,
    house,
    limit,
    name,
    page,
    street,
    surname,
    type,
  } = useFilterSearchParams();
  const isEmptyFilteredList = Boolean(totalCount && !filteredCount);
  // const pageTitle = usePageTitle();

  useEffect(() => {
    const targetPage = page ? Number(page) : undefined;
    fetchSubscriberAccounts({
      page: targetPage,
      limit,
      surname,
      name,
      account,
      type,
      street,
      house,
      apartment,
    });
  }, [
    account,
    apartment,
    fetchSubscriberAccounts,
    house,
    limit,
    name,
    page,
    street,
    surname,
    type,
  ]);

  const setModalWinState = () => {
    setShowModalWin((prevState) => !prevState);
  };

  return {
    isLoadingData,
    showSubscriberAccountsTable,
    count,
    totalCount,
    filteredCount,
    error,
    setModalWinState,
    showModalWin,
    isLoading,
    isEmptyFilteredList,
  };
};

export default useSubscriberAccountsPage;
