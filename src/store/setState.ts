import { ISetStateProps, SetState } from '@/types/store.types';

const setState =
  <T>({ set, name }: ISetStateProps<T>): SetState<T> =>
  (data) => {
    set(data, false, name);
  };

export default setState;
