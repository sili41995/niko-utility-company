import { FC } from 'react';
import { IProps } from './PricesTableRow.types';
import { TableBodyRow, TableData } from './PricesTableRow.styled';
import { formatDate } from '@/utils';
import { DateFormats } from '@/constants';
import { getDaysInMonth } from 'date-fns';

const PricesTableRow: FC<IProps> = ({ price }) => {
  const { period, amount, residents, tariff } = price;
  const periodDate = formatDate({
    date: period.start,
    dateFormat: DateFormats.period,
  });
  const daysInMonth = getDaysInMonth(period.start);
  const comment = `Мешканців: ${residents}; Днів: ${daysInMonth}; Тариф: ${tariff} грн.`;

  return (
    <TableBodyRow>
      <TableData center capitalize>
        {periodDate}
      </TableData>
      <TableData center>{amount}</TableData>
      <TableData>{comment}</TableData>
    </TableBodyRow>
  );
};

export default PricesTableRow;
