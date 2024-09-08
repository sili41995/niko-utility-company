import { GetStateFunc, SetStateFunc } from './store.types';
import { ITariff, INewTariff, Tariffs, FullTariffs } from './tariff.types';

export interface ITariffsInitialState {
  items: FullTariffs;
  current: Tariffs;
  isLoading: boolean;
  isLoaded: boolean;
  error: null | string;
}

export interface ITariffsState extends ITariffsInitialState {
  fetchTariffs: () => Promise<Tariffs | undefined>;
  addTariff: (data: INewTariff) => Promise<ITariff | undefined>;
}

export type GetTariffsStateFunc = GetStateFunc<ITariffsState>;

export type SetTariffsStateFunc = SetStateFunc<ITariffsState>;

export interface IFetchTariffsProps {
  set: SetTariffsStateFunc;
}

export interface IAddTariffProps {
  set: SetTariffsStateFunc;
  get: GetTariffsStateFunc;
  data: INewTariff;
}
