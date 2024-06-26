import {
  INewSubscriberAccount,
  IAddSubscriberAccountFormData,
} from '@/types/data.types';

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
    birthday: birthday ? new Date(birthday) : undefined,
    comment: comment ? comment : undefined,
  };
};

export default filterAddSubscriberAccountData;
