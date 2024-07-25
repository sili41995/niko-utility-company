import { IPeriodsState } from '@/types/periodsStore.types';

export const selectIsLoading = (state: IPeriodsState) => state.isLoading;

export const selectPeriods = (state: IPeriodsState) => state.items;

export const selectIsLoaded = (state: IPeriodsState) => state.isLoaded;

export const selectError = (state: IPeriodsState) => state.error;

export const selectFetchPeriods = (state: IPeriodsState) => state.fetchPeriods;

export const selectAddPeriod = (state: IPeriodsState) => state.addPeriod;

export const selectAddLocalPayment = (state: IPeriodsState) =>
  state.addLocalPayment;
