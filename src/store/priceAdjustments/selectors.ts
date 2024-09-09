import { IPriceAdjustmentsState } from '@/types/priceAdjustmentsStore.types';

export const selectIsLoading = (state: IPriceAdjustmentsState) =>
  state.isLoading;

export const selectError = (state: IPriceAdjustmentsState) => state.error;

export const selectAddPriceAdjustment = (state: IPriceAdjustmentsState) =>
  state.add;
