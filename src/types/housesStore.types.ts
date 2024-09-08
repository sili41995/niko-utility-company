import { Houses } from './house.types';
import { GetStateFunc, SetStateFunc } from './store.types';

export interface IHousesInitialState {
  items: Houses;
  isLoading: boolean;
  isLoaded: boolean;
  error: null | string;
}

export interface IHousesState extends IHousesInitialState {
  fetchHouses: (streetId: number) => Promise<Houses | undefined>;
}

export type GetHousesStateFunc = GetStateFunc<IHousesState>;

export type SetHousesStateFunc = SetStateFunc<IHousesState>;

export interface IFetchHousesOperationProps {
  set: SetHousesStateFunc;
  data: number;
}
