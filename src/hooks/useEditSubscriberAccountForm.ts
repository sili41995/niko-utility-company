import {
  IEditSubscriberAccountFormData,
  ISubscriberAccount,
} from '@/types/subscriberAccount.types';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  formatDate,
  getFilteredEditSubscriberAccountFormData,
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
import { IUseEditSubscriberAccountForm } from '@/types/hooks.types';
import { validateEditSubscriberAccountForm } from '@/validators';

const useEditSubscriberAccountForm = (
  subscriberAccount: ISubscriberAccount
): IUseEditSubscriberAccountForm => {
  const [isRemovalHouseHoldWaste, setIsRemovalHouseholdWaste] =
    useState<boolean>(() => subscriberAccount.isRemovalHouseholdWaste);
  const [isEligibleForBenefit, setIsEligibleForBenefit] = useState<boolean>(
    () => subscriberAccount.isEligibleForBenefit
  );
  const isLoading = useSubscriberAccountsStore(selectIsLoading);
  const updateSubscriberAccountById = useSubscriberAccountsStore(
    selectUpdateSubscriberAccountById
  );
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<IEditSubscriberAccountFormData>();
  const {
    street,
    house,
    apartment,
    number,
    contract,
    contractDate,
    accountType,
    isLivingApartment,
    residents,
    period,
    id,
    owner: {
      utr,
      passport,
      surname,
      name,
      phone,
      additionalPhone,
      email,
      middleName,
      birthday,
    },
  } = subscriberAccount;
  const fullStreetName = `${street.type} ${street.name}`;
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
      validateEditSubscriberAccountForm(errors);
    }
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<
    IEditSubscriberAccountFormData
  > = async (data) => {
    const filteredData = getFilteredEditSubscriberAccountFormData(data);

    try {
      await updateSubscriberAccountById({ data: filteredData, id });
      toasts.successToast(Messages.subscriberAccountUpdateSuccess);
    } catch (error) {
      if (error instanceof Error) {
        const isDuplicateDocumentErr =
          error.message.toLowerCase() === 'document already use';
        const errorMessage = isDuplicateDocumentErr
          ? Messages.duplicateDocumentErr
          : error.message;
        toasts.errorToast(errorMessage);
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
    fullStreetName,
    house: house.number,
    apartmentType,
    period: periodDefaultValue,
    number,
    contract,
    contractDateValue,
    accountType,
    birthday: birthdayDefaultValue,
    residents,
    isRemovalHouseHoldWaste,
    onCheckboxChange,
    email: email ?? '',
    utr,
    passport,
    surname,
    name,
    middleName,
    isEligibleForBenefit,
    phone,
    additionalPhone,
    isLoading,
  };
};

export default useEditSubscriberAccountForm;
