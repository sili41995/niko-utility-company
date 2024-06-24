import { FC } from 'react';
import Input from '../Input';
import { FormTypes, InputTypes, SearchParamsKeys } from '@/constants';
import Select from '../Select';
import { useFilter } from '@/hooks';
import { Container } from './Filter.styled.ts';
import ClearFilterBtn from '../ClearFilterBtn';

const Filter: FC = () => {
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
    // clearAccountFilter,
    // clearApartmentFilter,
    // clearHouseFilter,
    // clearNameFilter,
    // clearStreetFilter,
    clearSurnameFilter,
    // clearTypeFilter,
    surnameInputRef,
  } = useFilter();
  const showClearSurnameFilterBtn = Boolean(surname);

  return (
    <Container>
      <Input
        label='Прізвище'
        type={InputTypes.text}
        formType={FormTypes.filter}
        offBorderRadius={true}
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
        offBorderRadius={true}
        name={SearchParamsKeys.name}
        onChange={onFilterChange}
        defaultValue={name}
      />
      <Input
        label='Абон. рахунок №'
        type={InputTypes.text}
        width={180}
        formType={FormTypes.filter}
        offBorderRadius={true}
        name={SearchParamsKeys.account}
        onChange={onFilterChange}
        defaultValue={account}
      />
      <Select
        label='Тип рахунку'
        data={accountTypes}
        width={200}
        formType={FormTypes.filter}
        offBorderRadius={true}
        name={SearchParamsKeys.type}
        onChange={onFilterChange}
        defaultValue={defaultAccountTypesValue}
      />
      <Input
        label='Вулиця'
        type={InputTypes.text}
        width={180}
        formType={FormTypes.filter}
        offBorderRadius={true}
        name={SearchParamsKeys.street}
        onChange={onFilterChange}
        defaultValue={street}
      />
      <Input
        label='Будинок'
        type={InputTypes.text}
        width={100}
        formType={FormTypes.filter}
        offBorderRadius={true}
        name={SearchParamsKeys.house}
        onChange={onFilterChange}
        defaultValue={house}
      />
      <Input
        label='Квартра'
        type={InputTypes.text}
        width={100}
        formType={FormTypes.filter}
        offBorderRadius={true}
        name={SearchParamsKeys.apartment}
        onChange={onFilterChange}
        defaultValue={apartment}
      />
    </Container>
  );
};

export default Filter;
