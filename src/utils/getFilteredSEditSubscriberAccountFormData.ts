import {
  IEditSubscriberAccountData,
  IEditSubscriberAccountFormData,
} from '@/types/data.types';

const getFilteredSEditSubscriberAccountFormData = (
  data: IEditSubscriberAccountFormData
): IEditSubscriberAccountData => {
  const {
    additionalPhone,
    birthday,
    email,
    isEligibleForBenefit,
    isLivingApartment,
    isRemovalHouseholdWaste,
    period,
    phone,
    residents,
    comment,
    document,
  } = data;

  return {
    comment,
    document,
    isLivingApartment: isLivingApartment === 'true' ? true : false,
    residents: Number(residents),
    period: new Date(period),
    isRemovalHouseholdWaste,
    isEligibleForBenefit,
    phone,
    additionalPhone,
    birthday: birthday ? new Date(birthday) : undefined,
    email: email ? email : undefined,
  };
};

export default getFilteredSEditSubscriberAccountFormData;
