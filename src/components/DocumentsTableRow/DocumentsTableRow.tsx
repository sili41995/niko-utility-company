import { FC } from 'react';
import { IProps } from './DocumentsTableRow.types';
import {
  TableDataText,
  TableBodyRow,
  TableData,
} from './DocumentsTableRow.styled';
import { DateFormats } from '@/constants';
import { formatDate } from '@/utils';

const DocumentsTableRow: FC<IProps> = ({ document }) => {
  const { comment, document: documentName, createdAt } = document;
  const createdDate = formatDate({
    date: createdAt,
    dateFormat: DateFormats.date,
  });

  return (
    <>
      <TableBodyRow>
        <TableData>{documentName}</TableData>
        <TableData>{createdDate}</TableData>
        <TableData>
          <TableDataText trimText>{comment}</TableDataText>
        </TableData>
      </TableBodyRow>
    </>
  );
};

export default DocumentsTableRow;
