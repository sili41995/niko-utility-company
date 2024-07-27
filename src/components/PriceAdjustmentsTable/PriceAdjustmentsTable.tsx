import { FC } from 'react';
import {
  StyledTable,
  TableBody,
  TableHead,
  TableHeader,
  TableHeadRow,
} from './PriceAdjustmentsTable.styled';
import PriceAdjustmentsTableRow from '@/components/PriceAdjustmentsTableRow';
import { IProps } from './PriceAdjustmentsTable.types';

const PriceAdjustmentsTable: FC<IProps> = ({ priceAdjustments }) => (
  <StyledTable>
    <TableHead>
      <TableHeadRow>
        <TableHeader>Дата</TableHeader>
        <TableHeader>Сума</TableHeader>
        <TableHeader>Примітки</TableHeader>
      </TableHeadRow>
    </TableHead>
    <TableBody>
      {priceAdjustments.map((priceAdjustment) => (
        <PriceAdjustmentsTableRow
          key={priceAdjustment.id}
          priceAdjustment={priceAdjustment}
        />
      ))}
    </TableBody>
  </StyledTable>
);

export default PriceAdjustmentsTable;
