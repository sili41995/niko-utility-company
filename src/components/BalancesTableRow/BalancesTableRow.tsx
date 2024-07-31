import { FC } from 'react';
import { IProps } from './BalancesTableRow.types';
import { TableBodyRow, TableData } from './BalancesTableRow.styled';
import { DateFormats } from '@/constants';
import { formatDate, getSubscriberAccountBalanceByPeriod } from '@/utils';

const BalancesTableRow: FC<IProps> = ({ period, subscriberAccount }) => {
  const periodDate = formatDate({
    date: period.start ?? new Date(),
    dateFormat: DateFormats.period,
  });

  const {
    totalPrices,
    totalPriceAdjustments,
    totalBenefits,
    totalPayments,
    balance,
    isDebt,
  } = getSubscriberAccountBalanceByPeriod({
    period,
    subscriberAccount,
  });

  return (
    <TableBodyRow>
      <TableData center capitalize>
        {periodDate}
      </TableData>
      <TableData center>{totalPrices}</TableData>
      <TableData center>{totalPriceAdjustments}</TableData>
      <TableData center>{totalBenefits}</TableData>
      <TableData center>0</TableData>
      <TableData center>{totalPayments}</TableData>
      <TableData center isDebt={isDebt}>
        {balance}
      </TableData>
    </TableBodyRow>
  );
};

export default BalancesTableRow;
