import {
  CheckboxNames,
  GeneralParams,
  Messages,
  SearchParamsKeys,
  apartmentTypes,
} from '@/constants';
import { selectFetchHouses, selectHouses } from '@/store/houses/selectors';
import {
  useHousesStore,
  useStreetsStore,
  useSubscriberAccountsStore,
} from '@/store/store';
import {
  selectAddSubscriberAccount,
  selectFetchSubscriberAccounts,
  selectIsLoading,
} from '@/store/subscriberAccounts/selectors';
import { ISubscriberAccountFormData } from '@/types/data.types';
import { IUseAddSubscriberAccountForm } from '@/types/hooks.types';
import { InputChangeEvent } from '@/types/types';
import {
  filterAddSubscriberAccountData,
  getAccountTypesData,
  getCurrentDateParams,
  getSubscriberAccountSelectData,
  toasts,
} from '@/utils';
import { validateAddSubscriberAccountForm } from '@/validators';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useSetSearchParams from './useSetSearchParams';
import { selectStreets } from '@/store/streets/selectors';

const useAddSubscriberAccountForm = (): IUseAddSubscriberAccountForm => {
  const [isRemovalHouseholdWaste, setIsRemovalHouseholdWaste] =
    useState<boolean>(true);
  const [isEligibleForBenefit, setIsEligibleForBenefit] =
    useState<boolean>(false);
  const { searchParams } = useSetSearchParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<ISubscriberAccountFormData>();
  const streetId = watch('streetId');
  const fetchSubscriberAccounts = useSubscriberAccountsStore(
    selectFetchSubscriberAccounts
  );
  const fetchHouses = useHousesStore(selectFetchHouses);
  const addSubscriberAccount = useSubscriberAccountsStore(
    selectAddSubscriberAccount
  );
  const page = Number(searchParams.get(SearchParamsKeys.page) ?? '1');
  const limit = Number(GeneralParams.recordLimit);
  const { currentDate, firstDayOfMonth } = getCurrentDateParams();
  const isLoading = useSubscriberAccountsStore(selectIsLoading);
  const streets = useStreetsStore(selectStreets);
  const houses = useHousesStore(selectHouses);
  const { housesData, streetsData } = getSubscriberAccountSelectData({
    houses,
    streets,
  });
  const streetDefaultValue = streets[0]?.id;
  const accountTypes = getAccountTypesData();

  useEffect(() => {
    if (!streetId) {
      return;
    }

    fetchHouses(Number(streetId));
  }, [fetchHouses, streetId]);

  useEffect(() => {
    const invalidFields = Object.keys(errors);
    if (invalidFields.length) {
      validateAddSubscriberAccountForm(errors);
    }
  }, [isSubmitting, errors]);

  const toggleCheckedStatus = (e: InputChangeEvent) => {
    const { name: eventName } = e.currentTarget;
    const isEligibleForBenefitEvent =
      eventName === CheckboxNames.isEligibleForBenefit;
    const isRemovalHouseholdWasteEvent =
      eventName === CheckboxNames.isRemovalHouseholdWaste;

    if (isEligibleForBenefitEvent) {
      setIsEligibleForBenefit((prevState) => !prevState);
    }

    if (isRemovalHouseholdWasteEvent) {
      setIsRemovalHouseholdWaste((prevState) => !prevState);
    }
  };

  const handleFormSubmit: SubmitHandler<ISubscriberAccountFormData> = async (
    data
  ) => {
    const filteredAddSubscriberAccountData =
      filterAddSubscriberAccountData(data);
    // console.log(filteredAddSubscriberAccountData);

    try {
      await addSubscriberAccount(filteredAddSubscriberAccountData);
      await fetchSubscriberAccounts({ page, limit });
      toasts.successToast(Messages.subscriberAccountAddSuccess);
    } catch (error) {
      if (error instanceof Error) {
        toasts.errorToast(error.message);
      }
    }
  };

  return {
    apartmentTypes,
    register,
    handleSubmit,
    handleFormSubmit,
    currentDate,
    firstDayOfMonth,
    isLoading,
    isEligibleForBenefit,
    isRemovalHouseholdWaste,
    onCheckboxChange: toggleCheckedStatus,
    houses: housesData,
    streets: streetsData,
    streetDefaultValue,
    accountTypes,
  };
};

export default useAddSubscriberAccountForm;
