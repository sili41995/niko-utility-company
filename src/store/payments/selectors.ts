import { IPaymentsState } from '@/types/paymentsStore.types';

export const selectIsLoading = (state: IPaymentsState) => state.isLoading;

export const selectPayments = (state: IPaymentsState) => state.items;

export const selectTotalCount = (state: IPaymentsState) => state.count;

export const selectIsLoaded = (state: IPaymentsState) => state.isLoaded;

export const selectError = (state: IPaymentsState) => state.error;

export const selectFetchPayments = (state: IPaymentsState) =>
  state.fetchPayments;

export const selectAddPayment = (state: IPaymentsState) => state.addPayment;
