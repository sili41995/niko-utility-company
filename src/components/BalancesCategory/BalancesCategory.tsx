import { FC } from 'react';
import BalancesTable from '@/components/BalancesTable';
import DefaultMessage from '@/components/DefaultMessage';
import { Messages } from '@/constants';
import { IProps } from './BalancesCategory.types';

const BalancesCategory: FC<IProps> = ({ subscriberAccount }) => {
  const showBalancesTable = Boolean(subscriberAccount.balances.length);

  return showBalancesTable ? (
    <BalancesTable subscriberAccount={subscriberAccount} />
  ) : (
    <DefaultMessage message={Messages.emptyBalancesList} />
  );
};

export default BalancesCategory;
