import documentsService from '@/services/documents.service';
import operationWrapper from '@/store/documents/operationWrapper';
import {
  IFetchDocumentsProps,
  IFetchDocumentsRes,
} from '@/types/documentsStore.types';

const fetchDocumentsOperation = async ({
  set,
  data,
}: IFetchDocumentsProps): Promise<IFetchDocumentsRes | undefined> => {
  if (!data.page) {
    set({ isLoaded: false });
  }

  const response = await documentsService.fetchDocuments(data);
  set({
    items: response.data,
    count: response.count,
    filteredCount: response.filteredCount,
    isLoaded: true,
  });
  return response;
};

export const fetchDocuments = operationWrapper(fetchDocumentsOperation);
