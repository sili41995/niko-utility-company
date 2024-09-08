import { IAuthState } from '@/types/authStore.types';

export const selectIsLoggedIn = (state: IAuthState) => state.isLoggedIn;

export const selectUser = (state: IAuthState) => state.user;

export const selectIsLoading = (state: IAuthState) => state.isLoading;

export const selectToken = (state: IAuthState) => state.token;

export const selectIsRefreshing = (state: IAuthState) => state.isRefreshing;

export const selectSignIn = (state: IAuthState) => state.signIn;

export const selectFetchProfile = (state: IAuthState) => state.fetchProfile;
