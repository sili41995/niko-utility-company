import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import authStore from './auth/auth.store';
import { IAuthState } from '@/types/authStore.types';
import { IUsersState } from '@/types/usersStore.types';
import usersStore from './users/users.store';
import generalSettingsStore from './generalSettings/generalSettings.store';
import { IGeneralSettingsState } from '@/types/generalSettingsStore.types';
import { IStreetsState } from '@/types/streetsStore.types';
import streetsStore from './streets/streets.store';
import { IHousesState } from '@/types/housesStore.types';
import housesStore from './houses/streets.store';
import { ISubscriberAccountsState } from '@/types/subscriberAccountsStore.types';
import subscriberAccountsStore from './subscriberAccounts/subscriberAccounts.store';
import { ITariffsState } from '@/types/tariffsStore.types';
import tariffsStore from './tariffs/tariffs.store';
import documentsStore from './documents/documents.store';
import { IDocumentsState } from '@/types/documentsStore.types';
import periodsStore from './periods/periods.store';
import { IPeriodsState } from '@/types/periodsStore.types';

export const useAuthStore = create<IAuthState>()(
  devtools(
    persist(authStore.store, authStore.storageParams),
    authStore.devToolsParams
  )
);

export const useUsersStore = create<IUsersState>()(
  devtools(usersStore.store, usersStore.params)
);

export const useGeneralSettingsStore = create<IGeneralSettingsState>()(
  devtools(generalSettingsStore.store, generalSettingsStore.params)
);

export const useStreetsStore = create<IStreetsState>()(
  devtools(streetsStore.store, streetsStore.params)
);

export const useHousesStore = create<IHousesState>()(
  devtools(housesStore.store, housesStore.params)
);

export const useSubscriberAccountsStore = create<ISubscriberAccountsState>()(
  devtools(subscriberAccountsStore.store, subscriberAccountsStore.params)
);

export const useTariffsStore = create<ITariffsState>()(
  devtools(tariffsStore.store, tariffsStore.params)
);

export const useDocumentsStore = create<IDocumentsState>()(
  devtools(documentsStore.store, documentsStore.params)
);

export const usePeriodsStore = create<IPeriodsState>()(
  devtools(periodsStore.store, periodsStore.params)
);
