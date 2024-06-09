import { GetStateFunc, SetAuthStateFunc } from '@/types/authStore.types';
import initialState from './auth/initialState';
import { AxiosError } from 'axios';

const operationWrapper = <T, K>(
  operation: (data: {
    set: SetAuthStateFunc;
    get?: GetStateFunc<K>;
    data: K;
  }) => Promise<T | undefined>
) => {
  return async (data: {
    set: SetAuthStateFunc;
    get?: GetStateFunc<K>;
    data: K;
  }): Promise<T | undefined> => {
    try {
      data.set({ isLoading: true, error: initialState.error });
      const response = await operation(data);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        data.set({ error: error.message });
        throw new Error(error.response?.data.message);
      }
    } finally {
      data.set({ isLoading: initialState.isLoading });
    }
  };
};

export default operationWrapper;
