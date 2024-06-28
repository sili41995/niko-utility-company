import { ITariffsState } from '@/types/tariffsStore.types';

export const selectTariffs = (state: ITariffsState) => state.items;

export const selectIsLoading = (state: ITariffsState) => state.isLoading;
export const selectIsLoaded = (state: ITariffsState) => state.isLoaded;

export const selectError = (state: ITariffsState) => state.error;

export const selectFetchTariffs = (state: ITariffsState) => state.fetchTariffs;

export const selectAddTariff = (state: ITariffsState) => state.addTariff;
