import { usePeriodsStore, useSubscriberAccountsStore } from '@/store/store';
import {
  selectTotalCount,
  selectError,
  selectFetchSubscriberAccounts,
  selectIsLoaded as selectIsLoadedSubscriberAccounts,
  selectIsLoading as selectIsLoadingSubscriberAccounts,
  selectSubscriberAccounts,
  selectFilteredCount,
} from '@/store/subscriberAccounts/selectors';
import { IUseSubscriberAccountsPage } from '@/types/hooks.types';
import { useEffect, useState } from 'react';
import useFilterSearchParams from './useFilterSearchParams';
import {
  selectFetchCurrentPeriod,
  selectIsLoaded as selectIsLoadedPeriods,
  selectIsLoading as selectIsLoadingPeriods,
} from '@/store/periods/selectors';

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
  const isLoadingSubscriberAccounts = useSubscriberAccountsStore(
    selectIsLoadingSubscriberAccounts
  );
  const isLoadedSubscriberAccounts = useSubscriberAccountsStore(
    selectIsLoadedSubscriberAccounts
  );
  const isLoadingSubscriberAccountsData =
    !isLoadedSubscriberAccounts && isLoadingSubscriberAccounts;
  const isLoadingPeriods = usePeriodsStore(selectIsLoadingPeriods);
  const isLoadedPeriods = usePeriodsStore(selectIsLoadedPeriods);
  const isLoadingCurrentPeriodData = !isLoadedPeriods && isLoadingPeriods;
  const isLoadingData =
    isLoadingSubscriberAccountsData || isLoadingCurrentPeriodData;
  const showSubscriberAccountsTable = Boolean(
    isLoadedSubscriberAccounts && totalCount
  );
  const error = useSubscriberAccountsStore(selectError);
  const fetchCurrentPeriod = usePeriodsStore(selectFetchCurrentPeriod);
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

  useEffect(() => {
    fetchCurrentPeriod();
  }, [fetchCurrentPeriod]);

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
    isLoading: isLoadingSubscriberAccountsData,
    isEmptyFilteredList,
  };
};

export default useSubscriberAccountsPage;
