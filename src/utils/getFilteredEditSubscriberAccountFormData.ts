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
    documentName,
    surname,
    name,
    middleName,
    houseId,
    isEligibleForBenefit,
  } = data;

  const isLivingApartmentValue = isLivingApartment === 'true' ? true : false;
  const birthdayValue = birthday ? new Date(birthday) : undefined;

  return {
    isLivingApartment: isLivingApartmentValue,
    residents: Number(residents),
    houseId: Number(houseId),
    period: new Date(period),
    isRemovalHouseholdWaste,
    owner: {
      surname,
      name,
      middleName,
      phone,
      additionalPhone,
      email,
      isEligibleForBenefit,
      birthday: birthdayValue,
    },
    document: { comment, name: documentName },
  };
};

export default getFilteredSEditSubscriberAccountFormData;
