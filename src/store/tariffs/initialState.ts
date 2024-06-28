import { ITariffsInitialState } from '@/types/tariffsStore.types';

const initialState: ITariffsInitialState = {
  items: [],
  current: [],
  isLoading: false,
  isLoaded: false,
  error: null,
};

export default initialState;
