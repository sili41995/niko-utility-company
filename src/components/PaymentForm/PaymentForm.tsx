import { FC, useState } from 'react';
import SubscriberAccountInfo from '../SubscriberAccountInfo';
import { IProps } from './PaymentForm.types';
import { getSubscriberAccountAddress, getSubscriberAccountInfo } from '@/utils';
import { Container, Form } from './PaymentForm.styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import SubmitFormBtn from '../SubmitFormBtn';

const PaymentForm: FC<IProps> = ({ subscriberAccount }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<_____>();
  const address = getSubscriberAccountAddress(subscriberAccount);
  const subscriberAccountInfo = getSubscriberAccountInfo(subscriberAccount);

  const handleFormSubmit: SubmitHandler<_____> = async (data) => {
    // const accrualAdjustmentData = getAccrualAdjustmentData({
    //   data,
    //   id: subscriberAccount.id,
    // });
    // try {
    //   setIsLoading(true);
    //   await addAccrualAdjustment(accrualAdjustmentData);
    //   toasts.successToast(Messages.addAccrualAdjustmentSuccess);
    // } catch (error) {
    //   if (error instanceof Error) {
    //     toasts.errorToast(error.message);
    //   }
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <Container>
      <SubscriberAccountInfo
        address={address}
        subscriberAccountInfo={subscriberAccountInfo}
      />
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          settings={{ ...register('price', { required: true }) }}
          label='Сума, грн:'
          type={InputTypes.text}
          placeholder='Сума'
        />
        джерело
        <Input
          settings={{ ...register('date', { required: true }) }}
          label='Дата:'
          type={InputTypes.date}
          defaultValue={currentDate}
        />
        <SubmitFormBtn title='Зберегти' isLoading={isLoading} />
      </Form>
    </Container>
  );
};

export default PaymentForm;
