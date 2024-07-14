import { IPaymentsInitialState } from '@/types/paymentsStore.types';

const initialState: IPaymentsInitialState = {
  items: [],
  count: null,
  isLoading: false,
  isLoaded: false,
  error: null,
};

export default initialState;
