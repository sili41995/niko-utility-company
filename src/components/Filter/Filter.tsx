import { FC } from 'react';
import Input from '../Input';
import { InputTypes } from '@/constants';
import Select from '../Select';
import { getAccountTypesData } from '@/utils';

const Filter: FC = () => {
  const accountTypes = getAccountTypesData();

  return (
    <div>
      <Input placeholder='Абон. рахунок №' type={InputTypes.text} width={200} />
      <Select label='Тип рахунку:' data={accountTypes} width={200} />
    </div>
  );
};

export default Filter;
