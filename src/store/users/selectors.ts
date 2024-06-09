import { IUsersState } from '@/types/usersStore.types';

export const selectIsLoading = (state: IUsersState) => state.isLoading;

export const selectUsers = (state: IUsersState) => state.items;

export const selectIsLoaded = (state: IUsersState) => state.isLoaded;

export const selectError = (state: IUsersState) => state.error;

export const selectAddUser = (state: IUsersState) => state.addUser;

export const selectFetchUsers = (state: IUsersState) => state.fetchUsers;
