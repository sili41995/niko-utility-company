import { IPricesState } from '@/types/pricesStore.types';

export const selectIsLoading = (state: IPricesState) => state.isLoading;

export const selectLastCalculate = (state: IPricesState) => state.lastCalculate;

export const selectError = (state: IPricesState) => state.error;

export const selectGetLastCalculate = (state: IPricesState) =>
  state.getLastCalculate;

export const selectCalculate = (state: IPricesState) => state.calculate;
