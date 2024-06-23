import debounce from 'debounce';
import { InputChangeEvent, SelectChangeEvent } from '@/types/types';
import { useFilterSearchParams, useSetSearchParams } from '@/hooks';
import getDefaultAccountTypesValue from '@/utils/getDefaultAccountTypesValue';
import { getFilterAccountTypes } from '@/utils';
import { IUseFilter } from '@/types/hooks.types';

const useFilter = (): IUseFilter => {
  const { updateSearchParams } = useSetSearchParams();
  const { account, apartment, house, name, street, surname, type } =
    useFilterSearchParams();
  const accountTypes = getFilterAccountTypes();
  const defaultAccountTypesValue = getDefaultAccountTypesValue({
    accountTypes,
    type,
  });

  const onFilterChange = (e: InputChangeEvent | SelectChangeEvent): void => {
    const { value, name: key } = e.target;
    updateSearchParams({ key, value });
  };

  return {
    onFilterChange: debounce(onFilterChange, 300),
    surname,
    name,
    account,
    accountTypes,
    defaultAccountTypesValue,
    street,
    house,
    apartment,
  };
};

export default useFilter;
