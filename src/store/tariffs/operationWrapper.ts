import initialState from './initialState';
import { AxiosError } from 'axios';
import { toasts } from '@/utils';
import {
  GetTariffsStateFunc,
  SetTariffsStateFunc,
} from '@/types/tariffsStore.types';

const operationWrapper = <T, K>(
  operation: (data: {
    set: SetTariffsStateFunc;
    get: GetTariffsStateFunc;
    data: K;
  }) => Promise<T | undefined>
) => {
  return async (data: {
    set: SetTariffsStateFunc;
    get: GetTariffsStateFunc;
    data: K;
  }): Promise<T | undefined> => {
    try {
      data.set({ isLoading: true, error: initialState.error });
      const response = await operation(data);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message;
        data.set({ error: message });
        toasts.errorToast(message);
        throw new Error(message);
      }
    } finally {
      data.set({ isLoading: initialState.isLoading });
    }
  };
};

export default operationWrapper;
