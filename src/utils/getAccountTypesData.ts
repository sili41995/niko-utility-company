import { AccountCategory } from '@/types/accountType';
import { SelectData } from '@/types/types';

const getAccountTypesData = (): SelectData =>
  Object.values(AccountCategory).map((type) => ({
    title: type,
    value: type,
  }));

export default getAccountTypesData;
