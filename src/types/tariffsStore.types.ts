import { ITariff, NewTariff, Tariffs } from './data.types';
import { GetStateFunc, SetStateFunc } from './store.types';

export interface ITariffsInitialState {
  items: Tariffs;
  current: Tariffs;
  isLoading: boolean;
  isLoaded: boolean;
  error: null | string;
}

export interface ITariffsState extends ITariffsInitialState {
  fetchTariffs: () => Promise<Tariffs | undefined>;
  fetchCurrentTariffs: () => Promise<Tariffs | undefined>;
  addTariff: (data: NewTariff) => Promise<ITariff | undefined>;
}

export type GetTariffsStateFunc = GetStateFunc<ITariffsState>;

export type SetTariffsStateFunc = SetStateFunc<ITariffsState>;

export interface IFetchTariffsProps {
  set: SetTariffsStateFunc;
}

export interface IAddTariffProps {
  set: SetTariffsStateFunc;
  get: GetTariffsStateFunc;
  data: NewTariff;
}
