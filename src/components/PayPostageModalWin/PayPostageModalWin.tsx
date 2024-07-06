import { FC } from 'react';
import { IProps } from './PayPostageModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container } from './PayPostageModalWin.styled';

const PayPostageModalWin: FC<IProps> = ({ setModalWinState }) => {
  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Оплати Пошта:' />
      </Container>
    </ModalWin>
  );
};

export default PayPostageModalWin;
