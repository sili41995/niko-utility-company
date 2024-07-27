import { FC } from 'react';
import PriceAdjustmentsTable from '@/components/PriceAdjustmentsTable';
import DefaultMessage from '@/components/DefaultMessage';
import { Messages } from '@/constants';
import { IProps } from './PriceAdjustmentsCategory.types';

const PriceAdjustmentsCategory: FC<IProps> = ({ priceAdjustments }) => {
  const showPricesTable = Boolean(priceAdjustments.length);

  return showPricesTable ? (
    <PriceAdjustmentsTable priceAdjustments={priceAdjustments} />
  ) : (
    <DefaultMessage message={Messages.emptyPriceAdjustmentsList} />
  );
};

export default PriceAdjustmentsCategory;
