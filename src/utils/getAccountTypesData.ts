import { AccountTypes } from '@/constants';
import { SelectData } from '@/types/data.types';

const getAccountTypesData = (): SelectData =>
  Object.values(AccountTypes).map((type) => ({
    title: type,
    value: type,
  }));

export default getAccountTypesData;
