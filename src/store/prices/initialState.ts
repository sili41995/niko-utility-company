import { IPricesInitialState } from '@/types/pricesStore.types';

const initialState: IPricesInitialState = {
  lastCalculate: null,
  isLoading: false,
  error: null,
};

export default initialState;
