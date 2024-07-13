import { AccrualAdjustmentData } from '@/types/data.types';
import { IGetAccrualAdjustmentDataProps } from '@/types/types';

const getAccrualAdjustmentData = ({
  data,
  id,
}: IGetAccrualAdjustmentDataProps): AccrualAdjustmentData => {
  const { comment, date, price } = data;

  return {
    comment,
    date: new Date(date),
    price: Number(price),
    subscriberAccountId: id,
  };
};

export default getAccrualAdjustmentData;
