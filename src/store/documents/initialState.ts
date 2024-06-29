import { IDocumentsInitialState } from '@/types/documentsStore.types';

const initialState: IDocumentsInitialState = {
  items: [],
  count: null,
  filteredCount: null,
  isLoading: false,
  isLoaded: false,
  error: null,
};

export default initialState;
