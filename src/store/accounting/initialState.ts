import { IAccountingInitialState } from '@/types/accountingStore.types';

const initialState: IAccountingInitialState = {
  isLoading: false,
  lastCalculate: null,
  error: null,
};

export default initialState;
