import {
  AccountTypes,
  CheckboxNames,
  Messages,
  apartmentTypes,
} from '@/constants';
import { selectFetchHouses, selectHouses } from '@/store/houses/selectors';
import {
  useHousesStore,
  useStreetsStore,
  useSubscriberAccountsStore,
} from '@/store/store';
import { selectStreets } from '@/store/streets/selectors';
import { selectAddSubscriberAccount } from '@/store/subscriberAccounts/selectors';
import { ISubscriberAccountFormData, SelectData } from '@/types/data.types';
import { IUseAddSubscriberAccountForm } from '@/types/hooks.types';
import { InputChangeEvent } from '@/types/types';
import {
  filterAddSubscriberAccountData,
  getCurrentDateParams,
  toasts,
} from '@/utils';
import { validateAddSubscriberAccountForm } from '@/validators';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const useAddSubscriberAccountForm = (): IUseAddSubscriberAccountForm => {
  const [isRemovalHouseholdWaste, setIsRemovalHouseholdWaste] =
    useState<boolean>(true);
  const [isEligibleForBenefit, setIsEligibleForBenefit] =
    useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<ISubscriberAccountFormData>();
  const streets = useStreetsStore(selectStreets);
  const streetId = watch('streetId');
  const fetchHouses = useHousesStore(selectFetchHouses);
  const houses = useHousesStore(selectHouses);
  const addSubscriberAccount = useSubscriberAccountsStore(
    selectAddSubscriberAccount
  );
  const { currentMonth, currentYear, firstDayOfMonth } = getCurrentDateParams();
  const currentDate = `${currentYear}р. ${currentMonth}`;
  const accountTypes = Object.values(AccountTypes);
  const isLoading = false;
  //  const isLoading = false;
  const streetDefaultValue = streets[0]?.id;
  const streetsSelectData: SelectData = streets.map(({ name, type, id }) => ({
    title: `${type} ${name}`,
    value: String(id),
  }));
  const housesSelectData: SelectData = houses.map(({ id, number }) => ({
    title: number,
    value: String(id),
  }));
  const accountTypesSelectData: SelectData = accountTypes.map((type) => ({
    title: type,
    value: type,
  }));

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
      toasts.successToast(Messages.subscriberAccountAddSuccess);
    } catch (error) {
      if (error instanceof Error) {
        toasts.errorToast(error.message);
      }
    }
  };

  return {
    streets: streetsSelectData,
    houses: housesSelectData,
    accountTypes: accountTypesSelectData,
    apartmentTypes,
    register,
    handleSubmit,
    handleFormSubmit,
    streetDefaultValue,
    currentDate,
    firstDayOfMonth,
    isLoading,
    isEligibleForBenefit,
    isRemovalHouseholdWaste,
    onCheckboxChange: toggleCheckedStatus,
  };
};

export default useAddSubscriberAccountForm;
