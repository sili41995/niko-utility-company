import { FC } from 'react';
import PricesTable from '@/components/PricesTable';
import DefaultMessage from '@/components/DefaultMessage';
import { Messages } from '@/constants';
import { IProps } from './PricesCategory.types';

const PricesCategory: FC<IProps> = ({ prices }) => {
  const showPricesTable = Boolean(prices.length);

  return showPricesTable ? (
    <PricesTable prices={prices} />
  ) : (
    <DefaultMessage message={Messages.emptyPricesList} />
  );
};

export default PricesCategory;
