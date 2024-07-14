import { FC } from 'react';
import { IProps } from './PaymentsTableRow.types';
import { TableBodyRow, TableData } from './PaymentsTableRow.styled';
import { formatDate, getPaymentSource } from '@/utils';
import { DateFormats } from '@/constants';

const PaymentsTableRow: FC<IProps> = ({ payment }) => {
  const { subscriberAccount, date, amount, source } = payment;
  const { subscriberAccount: subscriberAccountNumber } = subscriberAccount;
  const paymentDate = formatDate({ date, dateFormat: DateFormats.date });
  const paymentSource = getPaymentSource(source);

  return (
    <TableBodyRow>
      <TableData center>{subscriberAccountNumber}</TableData>
      <TableData center>{paymentDate}</TableData>
      <TableData center>період</TableData>
      <TableData center>{amount}</TableData>
      <TableData center>{paymentSource}</TableData>
      <TableData></TableData>
    </TableBodyRow>
  );
};

export default PaymentsTableRow;
