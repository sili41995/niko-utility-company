import { FC } from 'react';
import { IProps } from './AccrualsAdjustmentModalWin.types';
import ModalWin from '../ModalWin';
import FormDataTitle from '../FormDataTitle';
import { Container } from './AccrualsAdjustmentModalWin.styled';

const AccrualsAdjustmentModalWin: FC<IProps> = ({ setModalWinState }) => {
  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Коригування нарахувань:' />
      </Container>
    </ModalWin>
  );
};

export default AccrualsAdjustmentModalWin;
