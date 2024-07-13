import { FC } from 'react';
import { IProps } from './PayPrivatbankModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container } from './PayPrivatbankModalWin.styled';

const PayPrivatbankModalWin: FC<IProps> = ({ setModalWinState }) => {
  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Оплати Приватбанк:' />
      </Container>
    </ModalWin>
  );
};

export default PayPrivatbankModalWin;
