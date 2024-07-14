import { NewPaymentData } from '@/types/data.types';
import { IGetNewPaymentDataProps } from '@/types/types';

const getNewPaymentData = ({
  data,
  id,
}: IGetNewPaymentDataProps): NewPaymentData => {
  const { amount, date, source } = data;

  return {
    amount: Number(amount),
    date: new Date(date),
    source,
    subscriberAccountId: id,
  };
};

export default getNewPaymentData;
