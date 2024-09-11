import Input from '@/components/Input';
import { Form } from './FindSubscriberAccountForm.styled';
import SubmitFormBtn from '@/components/SubmitFormBtn';
import { IProps } from './FindSubscriberAccountForm.types';
import { InputLabels, InputTypes } from '@/constants';
import { FC } from 'react';
import { useFindSubscriberAccountForm } from '@/hooks';

const FindSubscriberAccountForm: FC<IProps> = ({ setSubscriberAccount }) => {
  const { handleSubmit, handleFormSubmit, register, isLoading } =
    useFindSubscriberAccountForm(setSubscriberAccount);

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        settings={{ ...register('number', { required: true }) }}
        label={`${InputLabels.subscriberAccountNumber}:`}
        type={InputTypes.text}
        placeholder={InputLabels.subscriberAccountNumber}
      />
      <SubmitFormBtn title='Знайти' isLoading={isLoading} />
    </Form>
  );
};

export default FindSubscriberAccountForm;
