import { FC } from 'react';
import { IProps } from './PaymentsModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container, ContentContainer } from './PaymentsModalWin.styled';
import FindSubscriberAccountForm from '../FindSubscriberAccountForm';
import PaymentsSection from '../PaymentsSection';
import { usePaymentsModalWin } from '@/hooks';

const PaymentsModalWin: FC<IProps> = ({ setModalWinState }) => {
  const { subscriberAccount, setSubscriberAccount } = usePaymentsModalWin();

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Оплати (стрічка):' />
        <ContentContainer>
          {subscriberAccount ? (
            <PaymentsSection subscriberAccount={subscriberAccount} />
          ) : (
            <FindSubscriberAccountForm
              setSubscriberAccount={setSubscriberAccount}
            />
          )}
        </ContentContainer>
      </Container>
    </ModalWin>
  );
};

export default PaymentsModalWin;
