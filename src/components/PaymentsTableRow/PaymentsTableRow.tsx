import { FC } from 'react';
import { IProps } from './PaymentsTableRow.types';
import { TableBodyRow, TableData } from './PaymentsTableRow.styled';
import { formatDate } from '@/utils';
import { DateFormats, translatedPaymentSources } from '@/constants';

const PaymentsTableRow: FC<IProps> = ({ payment, fullInfo }) => {
  const {
    date,
    amount,
    period,
    subscriberAccount: { number = '' } = {},
    paymentSource: { name },
  } = payment;
  const paymentDate = formatDate({ date, dateFormat: DateFormats.date });
  const periodDate = formatDate({
    date: period?.start ?? new Date(),
    dateFormat: DateFormats.period,
  });
  const paymentSourceLabel = translatedPaymentSources[name];

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
      <TableData center>{paymentSourceLabel}</TableData>
      <TableData></TableData>
    </TableBodyRow>
  );
};

export default PaymentsTableRow;
