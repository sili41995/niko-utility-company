import { IGetNewPaymentDataProps, IPaymentData } from '@/types/payment.types';

const getNewPaymentData = ({
  data,
  id,
}: IGetNewPaymentDataProps): IPaymentData => {
  const { amount, date, source } = data;

  return {
    amount: Number(amount),
    date: new Date(date),
    source,
    subscriberAccountId: id,
  };
};

export default getNewPaymentData;
