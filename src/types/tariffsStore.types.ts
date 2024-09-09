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
  getAll: () => Promise<Tariffs | undefined>;
  add: (data: INewTariff) => Promise<ITariff | undefined>;
}

export type GetTariffsStateFunc = GetStateFunc<ITariffsState>;

export type SetTariffsStateFunc = SetStateFunc<ITariffsState>;

export interface IGetAllProps {
  set: SetTariffsStateFunc;
}

export interface IAddProps {
  set: SetTariffsStateFunc;
  get: GetTariffsStateFunc;
  data: INewTariff;
}
