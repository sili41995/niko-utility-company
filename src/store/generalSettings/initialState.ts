import { IGeneralSettingsInitialState } from '@/types/generalSettingsStore.types';

const initialState: IGeneralSettingsInitialState = {
  settings: {
    id: null,
    adsInPayments: null,
    currentAccount: null,
    helpPhone: null,
    mfi: null,
  },
  isLoading: false,
  isLoaded: false,
  error: null,
};

export default initialState;
