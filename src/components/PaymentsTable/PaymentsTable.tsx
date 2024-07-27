import { FC } from 'react';
import {
  StyledTable,
  TableBody,
  TableHead,
  TableHeader,
  TableHeadRow,
} from './PaymentsTable.styled';
import PaymentsTableRow from '@/components/PaymentsTableRow';
import { IProps } from './PaymentsTable.types';

const PaymentsTable: FC<IProps> = ({ payments, fullInfo = false }) => (
  <StyledTable>
    <TableHead>
      <TableHeadRow>
        {fullInfo && <TableHeader>Аб. рахунок</TableHeader>}
        <TableHeader>Дата</TableHeader>
        {fullInfo && <TableHeader>Період</TableHeader>}
        <TableHeader>Сума</TableHeader>
        <TableHeader>Джерело</TableHeader>
        <TableHeader>Примітки</TableHeader>
      </TableHeadRow>
    </TableHead>
    <TableBody>
      {payments.map((payment) => (
        <PaymentsTableRow
          key={payment.id}
          payment={payment}
          fullInfo={fullInfo}
        />
      ))}
    </TableBody>
  </StyledTable>
);

export default PaymentsTable;
