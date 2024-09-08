import initialState from './initialState';
import { AxiosError } from 'axios';
import { UserData } from '@/types/user.types';
import {
  IAuthOperationProps,
  ISignInOperationProps,
  SignInRes,
} from '@/types/authStore.types';
import authService from '@/services/auth.service';
import operationWrapper from './operationWrapper';

const signInOperation = async ({
  set,
  data,
}: ISignInOperationProps): Promise<SignInRes | undefined> => {
  const result = await authService.signIn(data);
  set({
    token: result.token,
  });

  return result;
};

const fetchProfileOperation = async ({
  set,
}: IAuthOperationProps): Promise<UserData | undefined> => {
  try {
    set({ isRefreshing: true, isLoading: true, error: initialState.error });
    const result = await authService.fetchProfile();

    set({
      user: result,
      isLoggedIn: true,
    });

    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      set({ error: error.message });
      throw new Error(error.response?.data.message);
    }
  } finally {
    set({
      isLoading: initialState.isLoading,
      isRefreshing: false,
    });
  }
};

export const signIn = operationWrapper(signInOperation);
export const fetchProfile = fetchProfileOperation;
