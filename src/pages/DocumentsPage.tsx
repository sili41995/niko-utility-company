import Container from '@/components/Container';
import Section from '@/components/Section';
import { FC } from 'react';
import DocumentsTable from '@/components/DocumentsTable';
import Pagination from '@/components/Pagination';
import { GeneralParams } from '@/constants';

const DocumentsPage: FC = () => {
  const count = Number(GeneralParams.recordLimit);
  const totalCount = 200;
  //  const count = ;
  //  const totalCount = ;

  return (
    <Section paddingBottom={24} paddingTop={24}>
      <Container>
        <DocumentsTable />
        <Pagination count={count} totalCount={totalCount} />
      </Container>
    </Section>
  );
};

export default DocumentsPage;
