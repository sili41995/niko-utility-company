import { SelectData } from '@/types/data.types';
import getAccountTypesData from './getAccountTypesData';

const getFilterAccountTypes = (): SelectData => {
  const accountTypes = getAccountTypesData();

  return [{ title: 'Всі', value: '' }, ...accountTypes];
};

export default getFilterAccountTypes;
