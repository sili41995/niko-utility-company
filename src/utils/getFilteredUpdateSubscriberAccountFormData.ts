import {
  IUpdateSubscriberAccountData,
  IUpdateSubscriberAccountFormData,
} from '@/types/subscriberAccount.types';

const getFilteredUpdateSubscriberAccountFormData = (
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
  const emailValue = email ? email : undefined;
  const houseIdValue = houseId ? Number(houseId) : undefined;

  return {
    isLivingApartment: isLivingApartmentValue,
    residents: Number(residents),
    houseId: houseIdValue,
    period: new Date(period),
    isRemovalHouseholdWaste,
    owner: {
      surname,
      name,
      middleName,
      phone,
      additionalPhone,
      email: emailValue,
      isEligibleForBenefit,
      birthday: birthdayValue,
    },
    document: { comment, name: documentName },
  };
};

export default getFilteredUpdateSubscriberAccountFormData;
