import { PriceAdjustmentData } from '@/types/data.types';
import { IGetPriceAdjustmentDataProps } from '@/types/types';

const getPriceAdjustmentData = ({
  data,
  id,
}: IGetPriceAdjustmentDataProps): PriceAdjustmentData => {
  const { comment, date, price } = data;

  return {
    comment,
    date: new Date(date),
    price: Number(price),
    subscriberAccountId: id,
  };
};

export default getPriceAdjustmentData;
