import {
  INewSubscriberAccount,
  IAddSubscriberAccountFormData,
} from '@/types/data.types';
import getSubscriberAccountSector from './getSubscriberAccountSector';

const filterAddSubscriberAccountData = (
  data: IAddSubscriberAccountFormData
): INewSubscriberAccount => {
  const {
    houseId,
    streetId,
    isLivingApartment,
    email,
    birthday,
    comment,
    contractDate,
    period,
    residents,
    apartment,
  } = data;
  const sector = getSubscriberAccountSector(data);

  return {
    ...data,
    apartment: apartment !== '' ? apartment : undefined,
    houseId: Number(houseId),
    streetId: Number(streetId),
    residents: Number(residents),
    isLivingApartment: isLivingApartment === 'true' ? true : false,
    contractDate: new Date(contractDate),
    period: new Date(period),
    email: email ? email : undefined,
    birthday: birthday ? new Date(birthday) : undefined,
    comment: comment ? comment : undefined,
    sector,
  };
};

export default filterAddSubscriberAccountData;
