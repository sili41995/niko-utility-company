import { ITariffsState } from '@/types/tariffsStore.types';

export const selectTariffs = (state: ITariffsState) => state.items;

export const selectIsLoading = (state: ITariffsState) => state.isLoading;

export const selectIsLoaded = (state: ITariffsState) => state.isLoaded;

export const selectError = (state: ITariffsState) => state.error;

export const selectGetAll = (state: ITariffsState) => state.getAll;

export const selectAdd = (state: ITariffsState) => state.add;
