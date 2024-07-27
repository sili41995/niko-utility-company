import { FC } from 'react';
import {
  StyledTable,
  TableBody,
  TableHead,
  TableHeader,
  TableHeadRow,
} from './PricesTable.styled';
import PricesTableRow from '@/components/PricesTableRow';
import { IProps } from './PricesTable.types';

const PricesTable: FC<IProps> = ({ prices }) => (
  <StyledTable>
    <TableHead>
      <TableHeadRow>
        <TableHeader>Період</TableHeader>
        <TableHeader>Сума</TableHeader>
        <TableHeader>Примітки</TableHeader>
      </TableHeadRow>
    </TableHead>
    <TableBody>
      {prices.map((price) => (
        <PricesTableRow key={price.id} price={price} />
      ))}
    </TableBody>
  </StyledTable>
);

export default PricesTable;
