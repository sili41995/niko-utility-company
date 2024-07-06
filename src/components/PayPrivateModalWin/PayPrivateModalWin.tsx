import { FC } from 'react';
import { IProps } from './PayPrivateModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container } from './PayPrivateModalWin.styled';

const PayPrivateModalWin: FC<IProps> = ({ setModalWinState }) => {
  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Оплати Приватбанк:' />
      </Container>
    </ModalWin>
  );
};

export default PayPrivateModalWin;
