import { FC } from 'react';
import {
  StyledTable,
  TableBody,
  TableHead,
  TableHeadRow,
  TableHeader,
} from './DocumentsTable.styled';
import { useDocumentsStore } from '@/store/store';
import { selectDocuments } from '@/store/documents/selectors';
import DocumentsTableRow from '@/components/DocumentsTableRow';

const DocumentsTable: FC = () => {
  const documents = useDocumentsStore(selectDocuments);

  return (
    <StyledTable>
      <TableHead>
        <TableHeadRow>
          <TableHeader width={300}>Документ</TableHeader>
          <TableHeader width={300}>Дата створення</TableHeader>
          <TableHeader>Коментар</TableHeader>
        </TableHeadRow>
      </TableHead>
      <TableBody>
        {documents.map((document) => (
          <DocumentsTableRow key={document.id} document={document} />
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default DocumentsTable;
