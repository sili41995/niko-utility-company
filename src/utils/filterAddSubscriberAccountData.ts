import {
  INewSubscriberAccount,
  ISubscriberAccountFormData,
} from '@/types/data.types';

const filterAddSubscriberAccountData = (
  data: ISubscriberAccountFormData
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
  } = data;

  return {
    ...data,
    houseId: Number(houseId),
    streetId: Number(streetId),
    isLivingApartment: isLivingApartment === 'true' ? true : false,
    contractDate: new Date(contractDate),
    period: new Date(period),
    email: email ? email : undefined,
    birthday: birthday ? birthday : undefined,
    comment: comment ? comment : undefined,
  };
};

export default filterAddSubscriberAccountData;
