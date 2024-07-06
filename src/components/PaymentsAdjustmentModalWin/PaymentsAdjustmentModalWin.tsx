import { FC } from 'react';
import { IProps } from './PaymentsAdjustmentModalWin.types';
import ModalWin from '../ModalWin';
import FormDataTitle from '../FormDataTitle';
import { Container } from './PaymentsAdjustmentModalWin.styled';

const PaymentsAdjustmentModalWin: FC<IProps> = ({ setModalWinState }) => {
  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Коригування оплат:' />
      </Container>
    </ModalWin>
  );
};

export default PaymentsAdjustmentModalWin;
