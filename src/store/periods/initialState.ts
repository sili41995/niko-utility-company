import { IPeriodsInitialState } from '@/types/periodsStore.types';

const initialState: IPeriodsInitialState = {
  items: [],
  isLoading: false,
  isLoaded: false,
  error: null,
};

export default initialState;
