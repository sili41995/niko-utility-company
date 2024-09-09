import { SelectData } from '@/types/types';
import getAccountTypesData from './getAccountTypesData';

const getFilterAccountTypes = (): SelectData => {
  const accountTypes = getAccountTypesData(true);

  return [{ title: 'Всі', value: '' }, ...accountTypes];
};

export default getFilterAccountTypes;
