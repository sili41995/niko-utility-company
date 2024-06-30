import { IPricesState } from '@/types/pricesStore.types';

export const selectIsLoading = (state: IPricesState) => state.isLoading;

export const selectIsLoaded = (state: IPricesState) => state.isLoaded;

export const selectError = (state: IPricesState) => state.error;

export const selectFetchPrices = (state: IPricesState) => state.fetchPrices;

export const selectCalculatePrices = (state: IPricesState) =>
  state.calculatePrices;

export const selectLastCalculate = (state: IPricesState) => state.lastCalculate;
