import { FC } from 'react';
import { IProps } from './PayAbankModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container } from './PayAbankModalWin.styled';

const PayAbankModalWin: FC<IProps> = ({ setModalWinState }) => {
  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Оплати Абанк:' />
      </Container>
    </ModalWin>
  );
};

export default PayAbankModalWin;
