import { FC } from 'react';
import { IProps } from './AccrualsAdjustmentForm.types';
import { Container, Form } from './AccrualsAdjustmentForm.styled';
import SubmitFormBtn from '@/components/SubmitFormBtn';
import Input from '@/components/Input';
import { InputTypes } from '@/constants';
import { useAccrualsAdjustmentForm } from '@/hooks';
import SubscriberAccountInfo from '@/components/SubscriberAccountInfo';

const AccrualsAdjustmentForm: FC<IProps> = ({
  subscriberAccount,
  resetSubscriberAccount,
}) => {
  const {
    address,
    subscriberAccountInfo,
    handleSubmit,
    handleFormSubmit,
    register,
    currentDate,
    isLoading,
  } = useAccrualsAdjustmentForm(subscriberAccount);

  return (
    <Container>
      <SubscriberAccountInfo
        address={address}
        subscriberAccountInfo={subscriberAccountInfo}
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

export default AccrualsAdjustmentForm;
