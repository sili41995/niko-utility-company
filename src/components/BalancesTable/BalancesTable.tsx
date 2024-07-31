import { FC } from 'react';
import {
  StyledTable,
  TableBody,
  TableHead,
  TableHeader,
  TableHeadRow,
} from './BalancesTable.styled';
import BalancesTableRow from '@/components/BalancesTableRow';
import { IProps } from './BalancesTable.types';

const BalancesTable: FC<IProps> = ({ subscriberAccount }) => (
  <StyledTable>
    <TableHead>
      <TableHeadRow>
        <TableHeader>Період</TableHeader>
        <TableHeader>Нараховано</TableHeader>
        <TableHeader>Корекція</TableHeader>
        <TableHeader>Пільги</TableHeader>
        <TableHeader>Субсидія</TableHeader>
        <TableHeader>Сплачено</TableHeader>
        <TableHeader>Сальдо</TableHeader>
      </TableHeadRow>
    </TableHead>
    <TableBody>
      {subscriberAccount.balances.map((balance) => (
        <BalancesTableRow
          key={balance.id}
          period={balance.period}
          subscriberAccount={subscriberAccount}
        />
      ))}
    </TableBody>
  </StyledTable>
);

export default BalancesTable;
