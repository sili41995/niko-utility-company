import { FC } from 'react';
import Input from '@/components/Input';
import { FormTypes, InputTypes, SearchParamsKeys } from '@/constants';
import Select from '@/components/Select';
import { useSubscriberAccountsFilter } from '@/hooks';
import { Container } from './SubscriberAccountsFilter.styled.ts';
import ClearFilterBtn from '@/components/ClearFilterBtn';

const SubscriberAccountsFilter: FC = () => {
  const {
    onFilterChange,
    surname,
    name,
    account,
    accountTypes,
    defaultAccountTypesValue,
    street,
    house,
    apartment,
    clearAccountFilter,
    clearApartmentFilter,
    clearHouseFilter,
    clearNameFilter,
    clearStreetFilter,
    clearSurnameFilter,
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
  } = useSubscriberAccountsFilter();

  return (
    <Container>
      <Input
        label='Прізвище'
        type={InputTypes.text}
        formType={FormTypes.filter}
        offBorderRadius
        name={SearchParamsKeys.surname}
        onChange={onFilterChange}
        defaultValue={surname}
        inputRef={surnameInputRef}
        btn={
          <ClearFilterBtn
            onClick={clearSurnameFilter}
            show={showClearSurnameFilterBtn}
          />
        }
      />
      <Input
        label="Ім'я"
        type={InputTypes.text}
        formType={FormTypes.filter}
        offBorderRadius
        name={SearchParamsKeys.name}
        onChange={onFilterChange}
        defaultValue={name}
        inputRef={nameInputRef}
        btn={
          <ClearFilterBtn
            onClick={clearNameFilter}
            show={showClearNameFilterBtn}
          />
        }
      />
      <Input
        label='Абонентський рахунок'
        type={InputTypes.text}
        width={180}
        formType={FormTypes.filter}
        offBorderRadius
        name={SearchParamsKeys.account}
        onChange={onFilterChange}
        defaultValue={account}
        inputRef={accountInputRef}
        btn={
          <ClearFilterBtn
            onClick={clearAccountFilter}
            show={showClearAccountFilterBtn}
          />
        }
      />
      <Select
        label='Тип рахунку'
        data={accountTypes}
        width={210}
        formType={FormTypes.filter}
        offBorderRadius
        name={SearchParamsKeys.type}
        onChange={onFilterChange}
        defaultValue={defaultAccountTypesValue}
      />
      <Input
        label='Вулиця'
        type={InputTypes.text}
        width={180}
        formType={FormTypes.filter}
        offBorderRadius
        name={SearchParamsKeys.street}
        onChange={onFilterChange}
        defaultValue={street}
        inputRef={streetInputRef}
        btn={
          <ClearFilterBtn
            onClick={clearStreetFilter}
            show={showClearStreetFilterBtn}
          />
        }
      />
      <Input
        label='Будинок'
        type={InputTypes.text}
        width={100}
        formType={FormTypes.filter}
        offBorderRadius
        name={SearchParamsKeys.house}
        onChange={onFilterChange}
        defaultValue={house}
        inputRef={houseInputRef}
        btn={
          <ClearFilterBtn
            onClick={clearHouseFilter}
            show={showClearHouseFilterBtn}
          />
        }
      />
      <Input
        label='Квартира'
        type={InputTypes.text}
        width={100}
        formType={FormTypes.filter}
        offBorderRadius
        name={SearchParamsKeys.apartment}
        onChange={onFilterChange}
        defaultValue={apartment}
        inputRef={apartmentInputRef}
        btn={
          <ClearFilterBtn
            onClick={clearApartmentFilter}
            show={showClearApartmentFilterBtn}
          />
        }
      />
    </Container>
  );
};

export default SubscriberAccountsFilter;
