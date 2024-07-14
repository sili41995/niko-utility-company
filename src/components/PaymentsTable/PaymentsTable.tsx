import { FC } from 'react';
import { selectPayments } from '@/store/payments/selectors';
import { usePaymentsStore } from '@/store/store';
import {
  StyledTable,
  TableBody,
  TableHead,
  TableHeader,
  TableHeadRow,
} from './PaymentsTable.styled';
import PaymentsTableRow from '../PaymentsTableRow';

const PaymentsTable: FC = () => {
  const payments = usePaymentsStore(selectPayments);

  return (
    <StyledTable>
      <TableHead>
        <TableHeadRow>
          {/* <TableHeader width={130}>Вулиця</TableHeader> */}
          <TableHeader>Аб. рахунок</TableHeader>
          <TableHeader>Дата</TableHeader>
          <TableHeader>Період</TableHeader>
          <TableHeader>Сума</TableHeader>
          <TableHeader>Джерело</TableHeader>
          <TableHeader>Примітки</TableHeader>
        </TableHeadRow>
      </TableHead>
      <TableBody>
        {payments.map((payment) => (
          <PaymentsTableRow key={payment.id} payment={payment} />
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default PaymentsTable;
