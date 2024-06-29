import initialState from './initialState';
import { AxiosError } from 'axios';
import { toasts } from '@/utils';
import {
  GetDocumentsStateFunc,
  SetDocumentsStateFunc,
} from '@/types/documentsStore.types';

const operationWrapper = <T, K>(
  operation: (data: {
    set: SetDocumentsStateFunc;
    get: GetDocumentsStateFunc;
    data: K;
  }) => Promise<T | undefined>
) => {
  return async (data: {
    set: SetDocumentsStateFunc;
    get: GetDocumentsStateFunc;
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
