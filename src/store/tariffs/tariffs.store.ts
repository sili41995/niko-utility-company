import setState from '@/store/setState';
import initialState from './initialState';
import {
  GetTariffsStateFunc,
  ITariffsState,
  SetTariffsStateFunc,
} from '@/types/tariffsStore.types';
import { getAll, add } from './operations';
import { ITariff, INewTariff, FullTariffs } from '@/types/tariff.types';

const tariffsSlice = (
  set: SetTariffsStateFunc,
  get: GetTariffsStateFunc
): ITariffsState => ({
  ...initialState,
  getAll: async (): Promise<FullTariffs | undefined> =>
    await getAll({
      set: setState({ set, name: 'getAll' }),
      get,
      data: undefined,
    }),
  add: async (data: INewTariff): Promise<ITariff | undefined> =>
    await add({
      data,
      set: setState({ set, name: 'add' }),
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
