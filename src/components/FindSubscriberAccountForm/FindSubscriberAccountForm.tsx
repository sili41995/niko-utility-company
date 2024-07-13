import Input from '@/components/Input';
import { Form } from './FindSubscriberAccountForm.styled';
import SubmitFormBtn from '@/components/SubmitFormBtn';
import ErrorMessage from '@/components/ErrorMessage';
import { IProps } from './FindSubscriberAccountForm.types';
import { InputTypes } from '@/constants';
import { FC } from 'react';
import { useFindSubscriberAccountForm } from '@/hooks';

const FindSubscriberAccountForm: FC<IProps> = ({ setSubscriberAccount }) => {
  const { handleSubmit, handleFormSubmit, register, error, isLoading } =
    useFindSubscriberAccountForm(setSubscriberAccount);

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        settings={{ ...register('subscriberAccount', { required: true }) }}
        label='Абонентський рахунок:'
        type={InputTypes.text}
        placeholder='Абонентський рахунок'
      />
      {error && <ErrorMessage error={error} />}
      <SubmitFormBtn title='Знайти' isLoading={isLoading} />
    </Form>
  );
};

export default FindSubscriberAccountForm;
