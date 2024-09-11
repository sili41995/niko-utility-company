import { FC } from 'react';
import Input from '@/components/Input';
import {
  FormTypes,
  InputLabels,
  InputTypes,
  SearchParamsKeys,
} from '@/constants';
import Select from '@/components/Select';
import { useSubscriberAccountsFilter } from '@/hooks';
import { Container } from './SubscriberAccountsFilter.styled.ts';
import ClearFilterBtn from '@/components/ClearFilterBtn';

const SubscriberAccountsFilter: FC = () => {
  const {
    onFilterChange,
    surname,
    name,
    number,
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
        label={InputLabels.surname}
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
        label={InputLabels.ownerName}
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
        label={InputLabels.subscriberAccountNumber}
        type={InputTypes.text}
        width={180}
        formType={FormTypes.filter}
        offBorderRadius
        name={SearchParamsKeys.number}
        onChange={onFilterChange}
        defaultValue={number}
        inputRef={accountInputRef}
        btn={
          <ClearFilterBtn
            onClick={clearAccountFilter}
            show={showClearAccountFilterBtn}
          />
        }
      />
      <Select
        label={InputLabels.category}
        data={accountTypes}
        width={210}
        formType={FormTypes.filter}
        offBorderRadius
        name={SearchParamsKeys.category}
        onChange={onFilterChange}
        defaultValue={defaultAccountTypesValue}
      />
      <Input
        label={InputLabels.street}
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
        label={InputLabels.house}
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
        label={InputLabels.apartment}
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
