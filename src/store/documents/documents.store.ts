import setState from '@/store/setState';
import initialState from './initialState';
import {
  GetDocumentsStateFunc,
  IDocumentsState,
  SetDocumentsStateFunc,
  IFetchDocumentsRes,
  IFetchDocumentsFilters,
} from '@/types/documentsStore.types';
import { fetchDocuments } from './operations';

const documentsSlice = (
  set: SetDocumentsStateFunc,
  get: GetDocumentsStateFunc
): IDocumentsState => ({
  ...initialState,
  fetchDocuments: async (
    data: IFetchDocumentsFilters
  ): Promise<IFetchDocumentsRes | undefined> =>
    await fetchDocuments({
      set: setState({ set, name: 'fetchDocuments' }),
      data,
      get,
    }),
});

const params = {
  name: 'documentsStore',
};

const documentsStore = {
  store: documentsSlice,
  params,
};

export default documentsStore;
