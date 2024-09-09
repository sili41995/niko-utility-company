import {
  IAddSubscriberAccountFormData,
  INewSubscriberAccountData,
} from '@/types/subscriberAccount.types';

const getFilteredAddSubscriberAccountData = (
  data: IAddSubscriberAccountFormData
): INewSubscriberAccountData => {
  const {
    houseId,
    isLivingApartment,
    email,
    birthday,
    contractDate,
    period,
    residents,
    apartment,
    phone,
    additionalPhone,
    middleName,
    name,
    surname,
    category,
    isEligibleForBenefit,
    isRemovalHouseholdWaste,
    number,
    contractNumber,
  } = data;
  const apartmentNumber = apartment! ? apartment : undefined;
  const isLivingApartmentValue = isLivingApartment === 'true' ? true : false;
  const birthdayValue = birthday ? new Date(birthday) : undefined;

  return {
    apartment: apartmentNumber,
    number,
    category,
    isLivingApartment: isLivingApartmentValue,
    residents: Number(residents),
    houseId: Number(houseId),
    period: new Date(period),
    isRemovalHouseholdWaste,
    contract: { number: contractNumber, date: new Date(contractDate) },
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
  };
};

export default getFilteredAddSubscriberAccountData;
