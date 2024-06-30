import { IPricesInitialState } from '@/types/pricesStore.types';

const initialState: IPricesInitialState = {
  count: null,
  lastCalculate: null,
  isLoading: false,
  isLoaded: false,
  error: null,
};

export default initialState;
