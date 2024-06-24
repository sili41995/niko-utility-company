import debounce from 'debounce';
import {
  BtnClickEvent,
  InputChangeEvent,
  SelectChangeEvent,
} from '@/types/types';
import { useFilterSearchParams, useSetSearchParams } from '@/hooks';
import getDefaultAccountTypesValue from '@/utils/getDefaultAccountTypesValue';
import { getFilterAccountTypes, makeBlur } from '@/utils';
import { IUseFilter } from '@/types/hooks.types';
import { SearchParamsKeys } from '@/constants';
import { useRef } from 'react';

const useFilter = (): IUseFilter => {
  const { updateSearchParams } = useSetSearchParams();
  const { account, apartment, house, name, street, surname, type } =
    useFilterSearchParams();
  const accountTypes = getFilterAccountTypes();
  const defaultAccountTypesValue = getDefaultAccountTypesValue({
    accountTypes,
    type,
  });
  const surnameInputRef = useRef<HTMLInputElement>(null);

  const onFilterChange = (e: InputChangeEvent | SelectChangeEvent): void => {
    const { value, name: key } = e.target;
    updateSearchParams({ key, value });
    updateSearchParams({ key: SearchParamsKeys.page, value: '' });
  };

  const clearSurnameFilter = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    if (surnameInputRef.current) {
      surnameInputRef.current.value = '';
    }

    updateSearchParams({ key: SearchParamsKeys.surname, value: '' });
  };

  const clearNameFilter = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    updateSearchParams({ key: SearchParamsKeys.name, value: '' });
  };

  const clearAccountFilter = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    updateSearchParams({ key: SearchParamsKeys.account, value: '' });
  };

  const clearTypeFilter = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    updateSearchParams({ key: SearchParamsKeys.type, value: '' });
  };

  const clearStreetFilter = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    updateSearchParams({ key: SearchParamsKeys.street, value: '' });
  };

  const clearHouseFilter = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    updateSearchParams({ key: SearchParamsKeys.house, value: '' });
  };

  const clearApartmentFilter = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    updateSearchParams({ key: SearchParamsKeys.apartment, value: '' });
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
    clearSurnameFilter,
    clearNameFilter,
    clearAccountFilter,
    clearTypeFilter,
    clearStreetFilter,
    clearHouseFilter,
    clearApartmentFilter,
    surnameInputRef,
  };
};

export default useFilter;
