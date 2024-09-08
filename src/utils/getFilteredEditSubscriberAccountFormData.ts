import {
  IUpdateSubscriberAccountData,
  IUpdateSubscriberAccountFormData,
} from '@/types/subscriberAccount.types';

const getFilteredSEditSubscriberAccountFormData = (
  data: IUpdateSubscriberAccountFormData
): IUpdateSubscriberAccountData => {
  const {
    additionalPhone,
    birthday,
    email,
    isLivingApartment,
    isRemovalHouseholdWaste,
    period,
    phone,
    residents,
    comment,
  } = data;

  return {
    comment,
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
