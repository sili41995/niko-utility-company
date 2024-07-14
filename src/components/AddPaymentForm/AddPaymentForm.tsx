import { FC } from 'react';
import SubscriberAccountInfo from '../SubscriberAccountInfo';
import { IProps } from './AddPaymentForm.types';
import { Container, Form, InputsWrap } from './AddPaymentForm.styled';
import SubmitFormBtn from '../SubmitFormBtn';
import Select from '../Select';
import Input from '../Input';
import { InputTypes } from '@/constants';
import { useAddPaymentForm } from '@/hooks';

const AddPaymentForm: FC<IProps> = ({
  subscriberAccount,
  resetSubscriberAccount,
}) => {
  const {
    address,
    subscriberAccountInfo,
    handleSubmit,
    handleFormSubmit,
    register,
    paymentSources,
    currentDate,
    isLoading,
  } = useAddPaymentForm(subscriberAccount);

  return (
    <Container>
      <SubscriberAccountInfo
        address={address}
        subscriberAccountInfo={subscriberAccountInfo}
        resetSubscriberAccount={resetSubscriberAccount}
      />
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputsWrap>
          <Input
            settings={{ ...register('amount', { required: true }) }}
            label='Сума, грн:'
            type={InputTypes.text}
            placeholder='Сума'
            width={250}
          />
          <Select
            label='Спосіб оплати:'
            settings={{ ...register('source', { required: true }) }}
            data={paymentSources}
            width={250}
          />
          <Input
            settings={{ ...register('date', { required: true }) }}
            label='Дата:'
            type={InputTypes.date}
            defaultValue={currentDate}
            width={250}
          />
        </InputsWrap>
        <SubmitFormBtn title='Зберегти' isLoading={isLoading} />
      </Form>
    </Container>
  );
};

export default AddPaymentForm;
