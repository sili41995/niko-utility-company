import { FC } from 'react';
import { IProps } from './BenefitsAdjustmentModalWin.types';
import ModalWin from '../ModalWin';
import FormDataTitle from '../FormDataTitle';
import { Container } from './BenefitsAdjustmentModalWin.styled';

const BenefitsAdjustmentModalWin: FC<IProps> = ({ setModalWinState }) => {
  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Коригування пільг:' />
      </Container>
    </ModalWin>
  );
};

export default BenefitsAdjustmentModalWin;
