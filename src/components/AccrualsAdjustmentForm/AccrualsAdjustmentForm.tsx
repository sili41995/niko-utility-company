import { FC, useEffect, useState } from 'react';
import { IProps } from './AccrualsAdjustmentForm.types';
import PeriodTitle from '../PeriodTitle';
import {
  Container,
  InfoWrap,
  Text,
  Accent,
  Form,
} from './AccrualsAdjustmentForm.styled';
import SubmitFormBtn from '../SubmitFormBtn';
import Input from '../Input';
import { DateFormats, InputTypes, Messages } from '@/constants';
import { formatDate, getAccrualAdjustmentData, toasts } from '@/utils';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAccrualAdjustmentFormData } from '@/types/data.types';
import { useAccountingStore } from '@/store/store';
import { selectAddAccrualAdjustment } from '@/store/accounting/selectors';

const AccrualsAdjustmentForm: FC<IProps> = ({ subscriberAccount }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<IAccrualAdjustmentFormData>();
  const addAccrualAdjustment = useAccountingStore(selectAddAccrualAdjustment);

  const {
    id,
    street,
    house,
    apartment,
    subscriberAccount: subscriberAccountNumber,
    owner,
  } = subscriberAccount;

  const address = `${street.type} ${street.name} ${house.number} кв. ${apartment}`;
  const subscriberAccountInfo = `${subscriberAccountNumber} - ${owner.surname} ${owner.name} ${owner.middleName}`;

  const currentDate = formatDate({
    date: new Date(),
    dateFormat: DateFormats.validDate,
  });

  useEffect(() => {
    const invalidFields = Object.keys(errors);

    if (invalidFields.length) {
      // validateAccrualsAdjustmentForm(errors);
    }
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<IAccrualAdjustmentFormData> = async (
    data
  ) => {
    const accrualAdjustmentData = getAccrualAdjustmentData({ data, id });

    try {
      setIsLoading(true);
      await addAccrualAdjustment(accrualAdjustmentData);
      toasts.successToast(Messages.addAccrualAdjustmentSuccess);
    } catch (error) {
      if (error instanceof Error) {
        toasts.errorToast(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <InfoWrap>
        <PeriodTitle />
        <Text>
          Адреса: <Accent>{address}</Accent>
        </Text>
        <Text>
          Абонентський рахунок: <Accent>{subscriberAccountInfo}</Accent>
        </Text>
      </InfoWrap>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          settings={{ ...register('price', { required: true }) }}
          label='Сума, грн:'
          type={InputTypes.text}
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
