import { FC } from 'react';
import { IProps } from './AddPaymentForm.types';
import { Form, InputsWrap } from './AddPaymentForm.styled';
import SubmitFormBtn from '@/components/SubmitFormBtn';
import Select from '@/components/Select';
import Input from '@/components/Input';
import { InputTypes } from '@/constants';
import { useAddPaymentForm } from '@/hooks';

const AddPaymentForm: FC<IProps> = ({ subscriberAccount }) => {
  const {
    handleSubmit,
    handleFormSubmit,
    register,
    paymentSources,
    currentDate,
    isLoading,
    disabledSubmitBtn,
  } = useAddPaymentForm(subscriberAccount);

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <InputsWrap>
        <Input
          settings={{ ...register('amount', { required: true }) }}
          label='Сума, грн:'
          type={InputTypes.number}
          step={0.01}
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
      <SubmitFormBtn
        title='Зберегти'
        isLoading={isLoading}
        disabled={disabledSubmitBtn}
      />
    </Form>
  );
};

export default AddPaymentForm;
