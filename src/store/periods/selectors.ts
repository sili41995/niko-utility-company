import { IPeriodsState } from '@/types/periodsStore.types';

export const selectIsLoading = (state: IPeriodsState) => state.isLoading;

export const selectCurrentPeriod = (state: IPeriodsState) =>
  state.currentPeriod;

export const selectIsLoaded = (state: IPeriodsState) => state.isLoaded;

export const selectError = (state: IPeriodsState) => state.error;

export const selectFetchCurrentPeriod = (state: IPeriodsState) =>
  state.fetchCurrentPeriod;

export const selectAddPeriod = (state: IPeriodsState) => state.addPeriod;
