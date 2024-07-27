import { FC } from 'react';
import { IProps } from './PriceAdjustmentsTableRow.types';
import { TableBodyRow, TableData } from './PriceAdjustmentsTableRow.styled';
import { formatDate } from '@/utils';
import { DateFormats } from '@/constants';

const PriceAdjustmentsTableRow: FC<IProps> = ({ priceAdjustment }) => {
  const { date, comment, price: priceValue } = priceAdjustment;
  const priceDate = formatDate({ date, dateFormat: DateFormats.date });

  return (
    <TableBodyRow>
      <TableData center>{priceDate}</TableData>
      <TableData center>{priceValue}</TableData>
      <TableData>{comment}</TableData>
    </TableBodyRow>
  );
};

export default PriceAdjustmentsTableRow;
