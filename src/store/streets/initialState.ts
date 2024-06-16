import { IStreetsInitialState } from '@/types/streetsStore.types';

const initialState: IStreetsInitialState = {
  items: [],
  isLoading: false,
  isLoaded: false,
  error: null,
};

export default initialState;
