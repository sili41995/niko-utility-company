import initialState from './initialState';
import { AxiosError } from 'axios';
import { toasts } from '@/utils';
import {
  GetStreetsStateFunc,
  SetStreetsStateFunc,
} from '@/types/streetsStore.types';

const operationWrapper = <T, K>(
  operation: (data: {
    set: SetStreetsStateFunc;
    get: GetStreetsStateFunc;
    data: K;
  }) => Promise<T | undefined>
) => {
  return async (data: {
    set: SetStreetsStateFunc;
    get: GetStreetsStateFunc;
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
