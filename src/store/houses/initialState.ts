import { IHousesInitialState } from '@/types/housesStore.types';

const initialState: IHousesInitialState = {
  items: [],
  isLoading: false,
  isLoaded: false,
  error: null,
};

export default initialState;
