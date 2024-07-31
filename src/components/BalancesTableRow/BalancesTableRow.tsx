import { FC } from 'react';
import { IProps } from './BalancesTableRow.types';
import { TableBodyRow, TableData } from './BalancesTableRow.styled';
import { DateFormats, PaymentSources } from '@/constants';
import { formatDate } from '@/utils';
import { IAmount, IPeriodId } from '@/types/types';

const BalancesTableRow: FC<IProps> = ({
  balance,
  prices,
  priceAdjustments,
  payments,
}) => {
  const { period } = balance;

  const periodDate = formatDate({
    date: period.start ?? new Date(),
    dateFormat: DateFormats.period,
  });

  const filterFunc = ({ periodId }: IPeriodId) => periodId === period.id;
  const amountIncrementFunc = (acc: number, { amount }: IAmount) =>
    acc + amount;

  const totalPrices = prices.filter(filterFunc).reduce(amountIncrementFunc, 0);
  const totalPriceAdjustments = priceAdjustments
    .filter(filterFunc)
    .reduce((acc, { price }) => acc + price, 0);
  const totalBenefits = payments
    .filter(
      ({ periodId, source }) =>
        periodId === period.id && source === PaymentSources.benefits
    )
    .reduce(amountIncrementFunc, 0);

  return (
    <TableBodyRow>
      <TableData center capitalize>
        {periodDate}
      </TableData>
      <TableData center>{totalPrices}</TableData>
      <TableData center>{totalPriceAdjustments}</TableData>
      <TableData center>{totalBenefits}</TableData>
      {/* 
      <TableData></TableData>
      <TableData></TableData>
      <TableData></TableData> */}
    </TableBodyRow>
  );
};

export default BalancesTableRow;
