import { IDocumentsState } from '@/types/documentsStore.types';

export const selectIsLoading = (state: IDocumentsState) => state.isLoading;

export const selectDocuments = (state: IDocumentsState) => state.items;

export const selectTotalCount = (state: IDocumentsState) => state.count;

export const selectFilteredCount = (state: IDocumentsState) =>
  state.filteredCount;

export const selectIsLoaded = (state: IDocumentsState) => state.isLoaded;

export const selectError = (state: IDocumentsState) => state.error;

export const selectFetchDocuments = (state: IDocumentsState) =>
  state.fetchDocuments;
