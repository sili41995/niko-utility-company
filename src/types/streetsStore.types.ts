import { Streets } from '@/types/street.types';
import { GetStateFunc, SetStateFunc } from './store.types';

export interface IStreetsInitialState {
  items: Streets;
  isLoading: boolean;
  isLoaded: boolean;
  error: null | string;
}

export interface IStreetsState extends IStreetsInitialState {
  fetchStreets: () => Promise<Streets | undefined>;
}

export type GetStreetsStateFunc = GetStateFunc<IStreetsState>;

export type SetStreetsStateFunc = SetStateFunc<IStreetsState>;
