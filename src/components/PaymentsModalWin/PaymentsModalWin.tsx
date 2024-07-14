import { FC, useState } from 'react';
import { IProps } from './PaymentsModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container, ContentContainer } from './PaymentsModalWin.styled';
import FindSubscriberAccountForm from '../FindSubscriberAccountForm';
import { ISubscriberAccount } from '@/types/subscriberAccount.types';
import AddPaymentForm from '../AddPaymentForm';

const PaymentsModalWin: FC<IProps> = ({ setModalWinState }) => {
  const [data, setData] = useState<ISubscriberAccount | null>(null);

  const setSubscriberAccount = (data: ISubscriberAccount): void => {
    setData(data);
  };

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Оплати (стрічка):' />
        <ContentContainer>
          {data && <AddPaymentForm subscriberAccount={data} />}
          <FindSubscriberAccountForm
            setSubscriberAccount={setSubscriberAccount}
          />
        </ContentContainer>
      </Container>
    </ModalWin>
  );
};

export default PaymentsModalWin;
