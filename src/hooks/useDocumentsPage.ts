import { useDocumentsStore } from '@/store/store';
import {
  selectIsLoading,
  selectIsLoaded,
  selectTotalCount,
  selectFilteredCount,
  selectDocuments,
  selectError,
  selectFetchDocuments,
} from '@/store/documents/selectors';
import { IUseDocumentsPage } from '@/types/hooks.types';
import { useEffect } from 'react';
import { useFilterSearchParams } from '@/hooks';

const useDocumentsPage = (): IUseDocumentsPage => {
  const isLoading = useDocumentsStore(selectIsLoading);
  const isLoaded = useDocumentsStore(selectIsLoaded);
  const totalCount = useDocumentsStore(selectTotalCount);
  const filteredCount = useDocumentsStore(selectFilteredCount);
  const documents = useDocumentsStore(selectDocuments);
  const error = useDocumentsStore(selectError);
  const fetchDocuments = useDocumentsStore(selectFetchDocuments);
  const { name, comment, limit, page } = useFilterSearchParams();
  const isLoadingData = !isLoaded && isLoading;
  const showDocumentsTable = Boolean(isLoaded && totalCount);
  const isEmptyFilteredList = Boolean(totalCount && !filteredCount);
  const count = documents.length;

  useEffect(() => {
    const targetPage = page ? Number(page) : undefined;
    fetchDocuments({
      page: targetPage,
      limit,
      name,
      comment,
    });
  }, [fetchDocuments, limit, page, name, comment]);

  return {
    isLoadingData,
    showDocumentsTable,
    isEmptyFilteredList,
    count,
    totalCount,
    isLoading,
    filteredCount,
    error,
  };
};

export default useDocumentsPage;
