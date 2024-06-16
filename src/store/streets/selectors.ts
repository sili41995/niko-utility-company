import { IStreetsState } from '@/types/streetsStore.types';

export const selectIsLoading = (state: IStreetsState) => state.isLoading;

export const selectStreets = (state: IStreetsState) => state.items;

export const selectIsLoaded = (state: IStreetsState) => state.isLoaded;

export const selectError = (state: IStreetsState) => state.error;

export const selectFetchStreets = (state: IStreetsState) => state.fetchStreets;
