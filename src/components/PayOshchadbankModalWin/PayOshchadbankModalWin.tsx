import { FC } from 'react';
import { IProps } from './PayOshchadbankModalWin.types';
import ModalWin from '../ModalWin';
import FormDataTitle from '../FormDataTitle';
import { Container } from './PayOshchadbankModalWin.styled';

const PayOshchadbankModalWin: FC<IProps> = ({ setModalWinState }) => {
  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Оплати Ощадбанк:' />
      </Container>
    </ModalWin>
  );
};

export default PayOshchadbankModalWin;
