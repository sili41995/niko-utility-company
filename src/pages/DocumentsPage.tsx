import Container from '@/components/Container';
import Section from '@/components/Section';
import { FC } from 'react';
import DocumentsTable from '@/components/DocumentsTable';
import Loader from '@/components/Loader';
import DocumentsFilter from '@/components/DocumentsFilter';
import Pagination from '@/components/Pagination';
import DefaultMessage from '@/components/DefaultMessage';
import { GeneralParams, Messages } from '@/constants';
import ErrorMessage from '@/components/ErrorMessage';
import NavBar from '@/components/NavBar';
import { useDocumentsPage } from '@/hooks';

const DocumentsPage: FC = () => {
  const {
    isLoadingData,
    showDocumentsTable,
    isEmptyFilteredList,
    count,
    totalCount,
    isLoading,
    filteredCount,
    error,
  } = useDocumentsPage();
  const showPagination = filteredCount && totalCount;

  return (
    <>
      {isLoadingData ? (
        <Loader />
      ) : (
        <Section paddingBottom={24} paddingTop={24}>
          <Container>
            {showDocumentsTable ? (
              <>
                <DocumentsFilter />
                {!isEmptyFilteredList && (
                  <>
                    <DocumentsTable />
                    {showPagination && (
                      <Pagination
                        count={count}
                        totalCount={totalCount}
                        isLoading={isLoading}
                        filteredCount={filteredCount}
                        quantity={Number(GeneralParams.recordLimit)}
                      />
                    )}
                  </>
                )}
                {isEmptyFilteredList && (
                  <DefaultMessage
                    message={Messages.emptyFilteredDocumentsList}
                  />
                )}
              </>
            ) : (
              <DefaultMessage message={Messages.emptyDocumentsList} />
            )}
            {error && <ErrorMessage error={error} />}
          </Container>
        </Section>
      )}
      <NavBar />
    </>
  );
};

export default DocumentsPage;
