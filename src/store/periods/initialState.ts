import { IPeriodsInitialState } from '@/types/periodsStore.types';

const initialState: IPeriodsInitialState = {
  currentPeriod: null,
  isLoading: false,
  isLoaded: false,
  error: null,
};

export default initialState;
