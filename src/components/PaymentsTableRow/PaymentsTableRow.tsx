import { FC } from 'react';
import { IProps } from './PaymentsTableRow.types';
import { TableBodyRow, TableData } from './PaymentsTableRow.styled';
import { formatDate, getPaymentSource } from '@/utils';
import { DateFormats } from '@/constants';

const PaymentsTableRow: FC<IProps> = ({ payment, fullInfo }) => {
  const { subscriberAccount, date, amount, paymentSource, period } = payment;
  const { number } = subscriberAccount ?? {};
  const paymentDate = formatDate({ date, dateFormat: DateFormats.date });
  const source = getPaymentSource(paymentSource);
  const periodDate = formatDate({
    date: period?.start ?? new Date(),
    dateFormat: DateFormats.period,
  });

  return (
    <TableBodyRow>
      {fullInfo && <TableData>{number}</TableData>}
      <TableData center>{paymentDate}</TableData>
      {fullInfo && (
        <TableData center capitalize>
          {periodDate}
        </TableData>
      )}
      <TableData center>{amount}</TableData>
      <TableData center>{source}</TableData>
      <TableData></TableData>
    </TableBodyRow>
  );
};

export default PaymentsTableRow;
