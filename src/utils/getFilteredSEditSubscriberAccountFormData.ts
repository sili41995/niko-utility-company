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
    comment,
    email,
    isEligibleForBenefit,
    isLivingApartment,
    isRemovalHouseholdWaste,
    period,
    phone,
    residents,
  } = data;

  return {
    isLivingApartment: isLivingApartment === 'true' ? true : false,
    residents: Number(residents),
    period: new Date(period),
    isRemovalHouseholdWaste,
    isEligibleForBenefit,
    phone,
    additionalPhone,
    birthday: birthday ? new Date(birthday) : undefined,
    comment: comment ? comment : undefined,
    email: email ? email : undefined,
  };
};

export default getFilteredSEditSubscriberAccountFormData;
