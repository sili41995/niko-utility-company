import {
  IEditSubscriberAccountData,
  IEditSubscriberAccountFormData,
} from '@/types/subscriberAccount.types';

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
    name,
  } = data;

  return {
    comment,
    name,
    isEligibleForBenefit,
    isLivingApartment: isLivingApartment === 'true' ? true : false,
    residents: Number(residents),
    isRemovalHouseholdWaste,
    period: new Date(period),
    owner: {
      phone,
      additionalPhone,
      birthday: birthday ? new Date(birthday) : undefined,
      email: email ? email : undefined,
    },
  };
};

export default getFilteredSEditSubscriberAccountFormData;
