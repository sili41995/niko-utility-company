import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import authStore from './auth/auth.store';
import { IAuthState } from '@/types/authStore.types';
import { IUsersState } from '@/types/usersStore.types';
import usersStore from './users/users.store';

export const useAuthStore = create<IAuthState>()(
  devtools(
    persist(authStore.store, authStore.storageParams),
    authStore.devToolsParams
  )
);

export const useUsersStore = create<IUsersState>()(
  devtools(usersStore.store, usersStore.params)
);
