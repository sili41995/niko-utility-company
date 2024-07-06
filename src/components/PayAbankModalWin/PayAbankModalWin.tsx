import { FC } from 'react';
import { IProps } from './PayAbankModalWin.types';
import ModalWin from '../ModalWin';
import FormDataTitle from '../FormDataTitle';
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
