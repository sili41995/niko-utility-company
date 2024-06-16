import { IHousesState } from '@/types/housesStore.types';

export const selectIsLoading = (state: IHousesState) => state.isLoading;

export const selectHouses = (state: IHousesState) => state.items;

export const selectIsLoaded = (state: IHousesState) => state.isLoaded;

export const selectError = (state: IHousesState) => state.error;

export const selectFetchHouses = (state: IHousesState) => state.fetchHouses;
