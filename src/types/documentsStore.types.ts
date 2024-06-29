import { Documents } from './data.types';
import { GetStateFunc, SetStateFunc } from './store.types';

export interface IFetchDocumentsFilters {
  page?: number;
  limit: number;
  document: string;
  comment: string;
}

export interface IFetchDocumentsRes {
  data: Documents;
  count: number;
  filteredCount: number;
}

export interface IDocumentsInitialState {
  items: Documents;
  count: null | number;
  filteredCount: null | number;
  isLoading: boolean;
  isLoaded: boolean;
  error: null | string;
}

export interface IDocumentsState extends IDocumentsInitialState {
  fetchDocuments: (
    data: IFetchDocumentsFilters
  ) => Promise<IFetchDocumentsRes | undefined>;
}

export type GetDocumentsStateFunc = GetStateFunc<IDocumentsState>;

export type SetDocumentsStateFunc = SetStateFunc<IDocumentsState>;

export interface IFetchDocumentsProps {
  set: SetDocumentsStateFunc;
  data: IFetchDocumentsFilters;
}
