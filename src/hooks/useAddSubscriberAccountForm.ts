import {
  CheckboxNames,
  DateFormats,
  Messages,
  apartmentTypes,
} from '@/constants';
import { useSubscriberAccountsStore } from '@/store/store';
import {
  selectAddSubscriberAccount,
  selectFetchSubscriberAccounts,
  selectIsLoading,
} from '@/store/subscriberAccounts/selectors';
import { IAddSubscriberAccountFormData } from '@/types/subscriberAccount.types';
import { IUseAddSubscriberAccountForm } from '@/types/hooks.types';
import { InputChangeEvent } from '@/types/types';
import {
  getFilteredAddSubscriberAccountData,
  formatDate,
  getAccountTypesData,
  toasts,
} from '@/utils';
import { validateAddSubscriberAccountForm } from '@/validators';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useFilterSearchParams from './useFilterSearchParams';
import useHousesLocation from './useHousesLocation';

const useAddSubscriberAccountForm = (): IUseAddSubscriberAccountForm => {
  const [isRemovalHouseholdWaste, setIsRemovalHouseholdWaste] =
    useState<boolean>(true);
  const [isEligibleForBenefit, setIsEligibleForBenefit] =
    useState<boolean>(false);
  const { number, apartment, house, limit, name, page, street, surname, type } =
    useFilterSearchParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<IAddSubscriberAccountFormData>();
  const streetId = watch('streetId');
  const fetchSubscriberAccounts = useSubscriberAccountsStore(
    selectFetchSubscriberAccounts
  );

  const addSubscriberAccount = useSubscriberAccountsStore(
    selectAddSubscriberAccount
  );
  const firstDayOfMonth = formatDate({
    date: new Date(),
    dateFormat: DateFormats.monthStart,
  });
  const isLoading = useSubscriberAccountsStore(selectIsLoading);
  const { housesData, streetsData } = useHousesLocation(streetId);
  const accountTypes = getAccountTypesData();

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

  const handleFormSubmit: SubmitHandler<IAddSubscriberAccountFormData> = async (
    data
  ) => {
    const filteredAddSubscriberAccountData =
      getFilteredAddSubscriberAccountData(data);

    try {
      await addSubscriberAccount(filteredAddSubscriberAccountData);
      await fetchSubscriberAccounts({
        page,
        limit,
        number,
        apartment,
        house,
        name,
        street,
        surname,
        type,
      });
      toasts.successToast(Messages.subscriberAccountAddSuccess);
      reset();
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
    firstDayOfMonth,
    isLoading,
    isEligibleForBenefit,
    isRemovalHouseholdWaste,
    onCheckboxChange: toggleCheckedStatus,
    houses: housesData,
    streets: streetsData,
    accountTypes,
  };
};

export default useAddSubscriberAccountForm;
