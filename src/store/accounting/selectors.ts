import { IAccountingState } from '@/types/accountingStore.types';

export const selectIsLoading = (state: IAccountingState) => state.isLoading;

export const selectError = (state: IAccountingState) => state.error;

export const selectLastCalculate = (state: IAccountingState) =>
  state.lastCalculate;

export const selectCalculatePrices = (state: IAccountingState) =>
  state.calculatePrices;

export const selectFetchPrices = (state: IAccountingState) => state.fetchPrices;

export const selectAddPriceAdjustment = (state: IAccountingState) =>
  state.addPriceAdjustment;
