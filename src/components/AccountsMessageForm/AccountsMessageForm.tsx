import { FC } from 'react';
import { Form, InputsWrap } from './AccountsMessageForm.styled';
import Select from '../Select';
import SubmitFormBtn from '../SubmitFormBtn';
import { useAccountsMessageForm } from '@/hooks';

const AccountsMessageForm: FC = () => {
  const {
    handleSubmit,
    register,
    handleFormSubmit,
    isLoading,
    houses,
    streets,
    streetDefaultValue,
  } = useAccountsMessageForm();

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <InputsWrap>
        <Select
          settings={{ ...register('streetId') }}
          data={streets}
          label='Вулиця'
          defaultValue={streetDefaultValue}
          width={500}
        />
        <Select
          settings={{ ...register('houseId') }}
          data={houses}
          label='Будинок'
          width={250}
        />
      </InputsWrap>
      <SubmitFormBtn title='Сформувати' isLoading={isLoading} />
    </Form>
  );
};

export default AccountsMessageForm;
