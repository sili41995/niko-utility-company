import { FC } from 'react';
import Input from '../Input';
import { FormTypes, InputTypes } from '@/constants';
import Select from '../Select';
import { getAccountTypesData } from '@/utils';
import { Container } from './Filter.styled';
import { SelectData } from '@/types/data.types';

const Filter: FC = () => {
  const accountTypes = getAccountTypesData();
  const fullAccountTypes: SelectData = [
    { title: 'Всі', value: '' },
    ...accountTypes,
  ];

  return (
    <Container>
      <Input
        label='Прізвище'
        type={InputTypes.text}
        formType={FormTypes.filter}
        offBorderRadius={true}
      />
      <Input
        label="Ім'я"
        type={InputTypes.text}
        formType={FormTypes.filter}
        offBorderRadius={true}
      />
      <Input
        label='Абон. рахунок №'
        type={InputTypes.text}
        width={180}
        formType={FormTypes.filter}
        offBorderRadius={true}
      />
      <Select
        label='Тип рахунку'
        data={fullAccountTypes}
        width={200}
        formType={FormTypes.filter}
        offBorderRadius={true}
      />
      <Input
        label='Вулиця'
        type={InputTypes.text}
        width={180}
        formType={FormTypes.filter}
        offBorderRadius={true}
      />
      <Input
        label='Будинок'
        type={InputTypes.text}
        width={100}
        formType={FormTypes.filter}
        offBorderRadius={true}
      />
      <Input
        label='Квартра'
        type={InputTypes.text}
        width={100}
        formType={FormTypes.filter}
        offBorderRadius={true}
      />
    </Container>
  );
};

export default Filter;
