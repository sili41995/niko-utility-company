import {
  NewSubscriberAccount,
  ISubscriberAccountFormData,
} from '@/types/data.types';

const filterAddSubscriberAccountData = (
  data: ISubscriberAccountFormData
): NewSubscriberAccount => {
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
  } = data;

  return {
    ...data,
    houseId: Number(houseId),
    streetId: Number(streetId),
    residents: Number(residents),
    isLivingApartment: isLivingApartment === 'true' ? true : false,
    contractDate: new Date(contractDate),
    period: new Date(period),
    email: email ? email : undefined,
    birthday: birthday ? birthday : undefined,
    comment: comment ? comment : undefined,
  };
};

export default filterAddSubscriberAccountData;
