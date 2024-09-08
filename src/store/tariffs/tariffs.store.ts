import setState from '@/store/setState';
import initialState from './initialState';
import {
  GetTariffsStateFunc,
  ITariffsState,
  SetTariffsStateFunc,
} from '@/types/tariffsStore.types';
import { fetchTariffs, addTariff } from './operations';
import { ITariff, INewTariff, FullTariffs } from '@/types/tariff.types';

const tariffsSlice = (
  set: SetTariffsStateFunc,
  get: GetTariffsStateFunc
): ITariffsState => ({
  ...initialState,
  fetchTariffs: async (): Promise<FullTariffs | undefined> =>
    await fetchTariffs({
      set: setState({ set, name: 'fetchTariffs' }),
      get,
      data: undefined,
    }),
  addTariff: async (data: INewTariff): Promise<ITariff | undefined> =>
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
