import {
  IUpdateSubscriberAccountFormData,
  IFullSubscriberAccount,
} from '@/types/subscriberAccount.types';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  formatDate,
  getFilteredUpdateSubscriberAccountFormData,
  getTranslatedUpdateSAError,
  toasts,
} from '@/utils';
import { InputChangeEvent } from '@/types/types';
import { useSubscriberAccountsStore } from '@/store/store';
import {
  selectIsLoading,
  selectUpdateSubscriberAccountById,
} from '@/store/subscriberAccounts/selectors';
import {
  CheckboxNames,
  DateFormats,
  Messages,
  apartmentTypes,
} from '@/constants';
import { useEffect, useState } from 'react';
import { IUseUpdateSubscriberAccountForm } from '@/types/hooks.types';
import { validateUpdateSubscriberAccountForm } from '@/validators';

const useUpdateSubscriberAccountForm = (
  subscriberAccount: IFullSubscriberAccount
): IUseUpdateSubscriberAccountForm => {
  const [isRemovalHouseHoldWaste, setIsRemovalHouseholdWaste] =
    useState<boolean>(() => subscriberAccount.isRemovalHouseholdWaste);
  const [isEligibleForBenefit, setIsEligibleForBenefit] = useState<boolean>(
    () => subscriberAccount.owner.isEligibleForBenefit
  );
  const isLoading = useSubscriberAccountsStore(selectIsLoading);
  const updateSubscriberAccountById = useSubscriberAccountsStore(
    selectUpdateSubscriberAccountById
  );
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<IUpdateSubscriberAccountFormData>();
  const {
    apartment,
    number,
    isLivingApartment,
    residents,
    period,
    id,
    accountType: { category },
    owner: {
      surname,
      name,
      phone,
      additionalPhone,
      email,
      middleName,
      birthday,
    },
    contract: { date: contractDate, number: contractNumber },
  } = subscriberAccount;
  const contractDateValue = formatDate({
    date: contractDate,
    dateFormat: DateFormats.date,
  });
  const apartmentType =
    apartmentTypes.find(({ value }) => value === String(isLivingApartment))
      ?.value ?? 'false';
  const periodDefaultValue = formatDate({
    date: period,
    dateFormat: DateFormats.validDate,
  });
  const birthdayDefaultValue = birthday
    ? formatDate({
        date: birthday,
        dateFormat: DateFormats.validDate,
      })
    : '';

  useEffect(() => {
    const invalidFields = Object.keys(errors);

    if (invalidFields.length) {
      validateUpdateSubscriberAccountForm(errors);
    }
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<
    IUpdateSubscriberAccountFormData
  > = async (data) => {
    const filteredData = getFilteredUpdateSubscriberAccountFormData(data);

    try {
      await updateSubscriberAccountById({ data: filteredData, id });
      toasts.successToast(Messages.subscriberAccountUpdateSuccess);
    } catch (error) {
      if (error instanceof Error) {
        const message = getTranslatedUpdateSAError(error.message);
        toasts.errorToast(message);
      }
    }
  };

  const onCheckboxChange = (e: InputChangeEvent) => {
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

  return {
    handleSubmit,
    handleFormSubmit,
    register,
    apartment: apartment ?? '',
    apartmentType,
    period: periodDefaultValue,
    number,
    contractDateValue,
    birthday: birthdayDefaultValue,
    residents,
    isRemovalHouseHoldWaste,
    onCheckboxChange,
    email: email ?? '',
    surname,
    name,
    middleName,
    isEligibleForBenefit,
    phone,
    additionalPhone,
    isLoading,
    accountType: category,
    contractNumber,
  };
};

export default useUpdateSubscriberAccountForm;
