import setState from '@/store/setState';
import initialState from './initialState';
import {
  GetTariffsStateFunc,
  ITariffsState,
  SetTariffsStateFunc,
} from '@/types/tariffsStore.types';
import { fetchTariffs, fetchCurrentTariffs, addTariff } from './operations';
import { ITariff, NewTariff, Tariffs } from '@/types/data.types';

const tariffsSlice = (
  set: SetTariffsStateFunc,
  get: GetTariffsStateFunc
): ITariffsState => ({
  ...initialState,
  fetchTariffs: async (): Promise<Tariffs | undefined> =>
    await fetchTariffs({
      set: setState({ set, name: 'fetchTariffs' }),
      get,
      data: undefined,
    }),
  fetchCurrentTariffs: async (): Promise<Tariffs | undefined> =>
    await fetchCurrentTariffs({
      set: setState({ set, name: 'fetchCurrentTariffs' }),
      get,
      data: undefined,
    }),
  addTariff: async (data: NewTariff): Promise<ITariff | undefined> =>
    await addTariff({
      data,
      set: setState({ set, name: 'addTariff' }),
      get,
    }),
});

const params = {
  name: 'tariffsStore',
};

const tariffsStore = {
  store: tariffsSlice,
  params,
};

export default tariffsStore;
