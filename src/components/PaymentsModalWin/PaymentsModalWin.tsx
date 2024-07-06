import { FC } from 'react';
import { IProps } from './PaymentsModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container } from './PaymentsModalWin.styled';

const PaymentsModalWin: FC<IProps> = ({ setModalWinState }) => {
  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Оплати (стрічка):' />
      </Container>
    </ModalWin>
  );
};

export default PaymentsModalWin;
