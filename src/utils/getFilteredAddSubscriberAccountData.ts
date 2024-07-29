import {
  INewSubscriberAccountData,
  IAddSubscriberAccountFormData,
} from '@/types/subscriberAccount.types';
import getSubscriberAccountSector from './getSubscriberAccountSector';

const getFilteredAddSubscriberAccountData = (
  data: IAddSubscriberAccountFormData
): INewSubscriberAccountData => {
  const {
    houseId,
    streetId,
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
    passport,
    utr,
    accountType,
    contract,
    isEligibleForBenefit,
    isRemovalHouseholdWaste,
    subscriberAccount,
  } = data;
  const sector = getSubscriberAccountSector(data);

  return {
    apartment: apartment !== '' ? apartment : undefined,
    houseId: Number(houseId),
    streetId: Number(streetId),
    residents: Number(residents),
    isLivingApartment: isLivingApartment === 'true' ? true : false,
    contractDate: new Date(contractDate),
    period: new Date(period),
    sector,
    accountType,
    contract,
    isEligibleForBenefit,
    isRemovalHouseholdWaste,
    subscriberAccount,
    owner: {
      phone,
      additionalPhone,
      email: email ? email : undefined,
      birthday: birthday ? new Date(birthday) : undefined,
      middleName,
      name,
      surname,
      passport,
      utr,
    },
  };
};

export default getFilteredAddSubscriberAccountData;
