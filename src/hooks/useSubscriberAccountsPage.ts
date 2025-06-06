import { useSubscriberAccountsStore } from '@/store/store';
import {
  selectTotalCount,
  selectFetchSubscriberAccounts,
  selectIsLoaded,
  selectIsLoading,
  selectSubscriberAccounts,
  selectFilteredCount,
} from '@/store/subscriberAccounts/selectors';
import { IUseSubscriberAccountsPage } from '@/types/hooks.types';
import { useEffect, useState } from 'react';
import useFilterSearchParams from './useFilterSearchParams';
import usePeriodsData from './usePeriodsData';

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
  const isLoadingSubscriberAccountsData = !isLoaded && isLoading;
  const isLoadingPeriodsData = usePeriodsData();
  const isLoadingData = isLoadingSubscriberAccountsData || isLoadingPeriodsData;
  const showSubscriberAccountsTable = Boolean(isLoaded && totalCount);

  const {
    number,
    apartment,
    house,
    limit,
    name,
    page,
    street,
    surname,
    category,
  } = useFilterSearchParams();
  const isEmptyFilteredList = Boolean(totalCount && !filteredCount);

  useEffect(() => {
    const targetPage = page ? Number(page) : undefined;
    fetchSubscriberAccounts({
      page: targetPage,
      limit,
      surname,
      name,
      number,
      category,
      street,
      house,
      apartment,
    });
  }, [
    number,
    apartment,
    fetchSubscriberAccounts,
    house,
    limit,
    name,
    page,
    street,
    surname,
    category,
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
    setModalWinState,
    showModalWin,
    isLoading: isLoadingSubscriberAccountsData,
    isEmptyFilteredList,
  };
};

export default useSubscriberAccountsPage;
