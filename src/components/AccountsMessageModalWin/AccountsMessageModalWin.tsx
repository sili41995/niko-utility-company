import { FC } from 'react';
import { IProps } from './AccountsMessageModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container } from './AccountsMessageModalWin.styled';

const PayPostageModalWin: FC<IProps> = ({ setModalWinState }) => {
  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Рахунки-повідомлення:' />
      </Container>
    </ModalWin>
  );
};

export default PayPostageModalWin;
