import { FC } from 'react';
import {
  StyledTable,
  TableBody,
  TableHead,
  TableHeadRow,
  TableHeader,
} from '@/components/SubscriberAccountsTable/SubscriberAccountsTable.styled';
import { documents } from '@/data/documents';
import {
  TableBodyRow,
  TableData,
} from '../SubscriberAccountsTableRow/SubscriberAccountsTableRow.styled';

const DocumentsTable: FC = () => {
  return (
    <StyledTable>
      <TableHead>
        <TableHeadRow>
          <TableHeader>-</TableHeader>
          <TableHeader>Тип документу</TableHeader>
          <TableHeader>№</TableHeader>
          <TableHeader>Дата</TableHeader>
          <TableHeader>Назва</TableHeader>
        </TableHeadRow>
      </TableHead>
      <TableBody>
        {documents.map(({ documentType, number, date, name }, index) => (
          <TableBodyRow key={index}>
            <TableData>-</TableData>
            <TableData>{documentType}</TableData>
            <TableData>{number}</TableData>
            <TableData>{date}</TableData>
            <TableData>{name}</TableData>
          </TableBodyRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default DocumentsTable;
