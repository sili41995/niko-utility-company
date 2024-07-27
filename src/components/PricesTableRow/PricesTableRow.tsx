import { FC } from 'react';
import { IProps } from './PricesTableRow.types';
import { TableBodyRow, TableData } from './PricesTableRow.styled';
import { formatDate } from '@/utils';
import { DateFormats } from '@/constants';

const PricesTableRow: FC<IProps> = ({ price }) => {
  const { date, comment, price: priceValue } = price;
  const priceDate = formatDate({ date, dateFormat: DateFormats.date });

  return (
    <TableBodyRow>
      <TableData center>{priceDate}</TableData>
      <TableData center>{priceValue}</TableData>
      <TableData>{comment}</TableData>
    </TableBodyRow>
  );
};

export default PricesTableRow;
