import debounce from 'debounce';
import {
  BtnClickEvent,
  InputChangeEvent,
  SelectChangeEvent,
} from '@/types/types';
import { useFilterSearchParams, useSetSearchParams } from '@/hooks';
import getDefaultAccountTypesValue from '@/utils/getDefaultAccountTypesValue';
import { getFilterAccountTypes, makeBlur } from '@/utils';
import { IUseSubscriberAccountsFilter } from '@/types/hooks.types';
import { SearchParamsKeys } from '@/constants';
import { useRef } from 'react';

const useSubscriberAccountsFilter = (): IUseSubscriberAccountsFilter => {
  const { updateSearchParams } = useSetSearchParams();
  const { account, apartment, house, name, street, surname, type } =
    useFilterSearchParams();
  const accountTypes = getFilterAccountTypes();
  const defaultAccountTypesValue = getDefaultAccountTypesValue({
    accountTypes,
    type,
  });
  const surnameInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const accountInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const houseInputRef = useRef<HTMLInputElement>(null);
  const apartmentInputRef = useRef<HTMLInputElement>(null);
  const showClearSurnameFilterBtn = Boolean(surname);
  const showClearNameFilterBtn = Boolean(name);
  const showClearAccountFilterBtn = Boolean(account);
  const showClearStreetFilterBtn = Boolean(street);
  const showClearHouseFilterBtn = Boolean(house);
  const showClearApartmentFilterBtn = Boolean(apartment);

  const onFilterChange = (e: InputChangeEvent | SelectChangeEvent): void => {
    const { value, name: key } = e.target;
    updateSearchParams({ key, value });
    updateSearchParams({ key: SearchParamsKeys.page, value: '' });
  };

  const clearSurnameFilter = (e: BtnClickEvent) => {
    if (surnameInputRef.current) {
      surnameInputRef.current.value = '';
    }

    makeBlur(e.currentTarget);
    updateSearchParams({ key: SearchParamsKeys.surname, value: '' });
  };

  const clearNameFilter = (e: BtnClickEvent) => {
    if (nameInputRef.current) {
      nameInputRef.current.value = '';
    }

    makeBlur(e.currentTarget);
    updateSearchParams({ key: SearchParamsKeys.name, value: '' });
  };

  const clearAccountFilter = (e: BtnClickEvent) => {
    if (accountInputRef.current) {
      accountInputRef.current.value = '';
    }

    makeBlur(e.currentTarget);
    updateSearchParams({ key: SearchParamsKeys.account, value: '' });
  };

  const clearStreetFilter = (e: BtnClickEvent) => {
    if (streetInputRef.current) {
      streetInputRef.current.value = '';
    }

    makeBlur(e.currentTarget);
    updateSearchParams({ key: SearchParamsKeys.street, value: '' });
  };

  const clearHouseFilter = (e: BtnClickEvent) => {
    if (houseInputRef.current) {
      houseInputRef.current.value = '';
    }

    makeBlur(e.currentTarget);
    updateSearchParams({ key: SearchParamsKeys.house, value: '' });
  };

  const clearApartmentFilter = (e: BtnClickEvent) => {
    if (apartmentInputRef.current) {
      apartmentInputRef.current.value = '';
    }

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
    clearStreetFilter,
    clearHouseFilter,
    clearApartmentFilter,
    surnameInputRef,
    nameInputRef,
    accountInputRef,
    streetInputRef,
    houseInputRef,
    apartmentInputRef,
    showClearSurnameFilterBtn,
    showClearNameFilterBtn,
    showClearAccountFilterBtn,
    showClearStreetFilterBtn,
    showClearHouseFilterBtn,
    showClearApartmentFilterBtn,
  };
};

export default useSubscriberAccountsFilter;
