import { FC } from 'react';
import { IProps } from './PriceAdjustmentForm.types';
import { Container, Form } from './PriceAdjustmentForm.styled';
import SubmitFormBtn from '@/components/SubmitFormBtn';
import Input from '@/components/Input';
import { InputTypes } from '@/constants';
import { usePriceAdjustmentForm } from '@/hooks';
import SubscriberAccountInfo from '@/components/SubscriberAccountInfo';

const PriceAdjustmentForm: FC<IProps> = ({
  subscriberAccount,
  resetSubscriberAccount,
}) => {
  const { handleSubmit, handleFormSubmit, register, currentDate, isLoading } =
    usePriceAdjustmentForm(subscriberAccount);

  return (
    <Container>
      <SubscriberAccountInfo
        subscriberAccount={subscriberAccount}
        resetSubscriberAccount={resetSubscriberAccount}
      />
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          settings={{ ...register('price', { required: true }) }}
          label='Сума, грн:'
          type={InputTypes.number}
          step={0.01}
          placeholder='Сума'
        />
        <Input
          settings={{ ...register('date', { required: true }) }}
          label='Дата:'
          type={InputTypes.date}
          defaultValue={currentDate}
        />
        <Input
          settings={{ ...register('comment', { required: true }) }}
          label='Коментар:'
          type={InputTypes.text}
        />
        <SubmitFormBtn title='Зберегти' isLoading={isLoading} />
      </Form>
    </Container>
  );
};

export default PriceAdjustmentForm;
