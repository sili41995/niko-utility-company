import { FC } from 'react';
import PricesTable from '@/components/PricesTable';
import DefaultMessage from '@/components/DefaultMessage';
import { Messages } from '@/constants';
import { IProps } from './PriceAdjustmentsCategory.types';

const PriceAdjustmentsCategory: FC<IProps> = ({ priceAdjustments }) => {
  const showPricesTable = Boolean(priceAdjustments.length);

  return showPricesTable ? (
    <PricesTable prices={priceAdjustments} />
  ) : (
    <DefaultMessage message={Messages.emptyPricesList} />
  );
};

export default PriceAdjustmentsCategory;
