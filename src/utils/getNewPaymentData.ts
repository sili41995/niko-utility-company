import { IGetNewPaymentDataProps, IPaymentData } from '@/types/payment.types';

const getNewPaymentData = ({
  data,
  id,
}: IGetNewPaymentDataProps): IPaymentData => {
  const { amount, date, name } = data;

  return {
    amount: Number(amount),
    date: new Date(date),
    name,
    subscriberAccountId: id,
  };
};

export default getNewPaymentData;
