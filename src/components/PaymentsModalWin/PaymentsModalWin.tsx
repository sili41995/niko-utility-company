import { FC } from 'react';
import { IProps } from './PaymentsModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container, ContentContainer } from './PaymentsModalWin.styled';
import AllPaymentsTable from '@/components/AllPaymentsTable';
import { usePaymentsModalWin } from '@/hooks';
import AddPaymentForm from '@/components/AddPaymentForm';
import SubscriberAccountInfo from '@/components/SubscriberAccountInfo';
import Input from '@/components/Input';
import { InputTypes } from '@/constants';

const PaymentsModalWin: FC<IProps> = ({ setModalWinState }) => {
  const { subscriberAccount, onSubscriberAccountInputChange } =
    usePaymentsModalWin();

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Оплати (стрічка):' />
        <ContentContainer>
          <SubscriberAccountInfo subscriberAccount={subscriberAccount} />
          <Input
            type={InputTypes.text}
            label='Абонентський рахунок'
            width={550}
            onChange={onSubscriberAccountInputChange}
            horizontal
          />
          <AddPaymentForm subscriberAccount={subscriberAccount} />
          <AllPaymentsTable />
        </ContentContainer>
      </Container>
    </ModalWin>
  );
};

export default PaymentsModalWin;
