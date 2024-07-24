import { FC } from 'react';
import { IProps } from './PayPostageModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container, ContentContainer } from './PayPostageModalWin.styled';
import PeriodTitle from '../PeriodTitle';
import ActionBtn from '../ActionBtn';
import { usePayPostageModalWin } from '@/hooks';

const PayPostageModalWin: FC<IProps> = ({ setModalWinState }) => {
  const { isLoading, onActionBtnClick } = usePayPostageModalWin();

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Оплати Пошта:' />
        <ContentContainer>
          <PeriodTitle />
          <ActionBtn
            title='Сформувати'
            isLoading={isLoading}
            onBtnClick={onActionBtnClick}
          />
        </ContentContainer>
      </Container>
    </ModalWin>
  );
};

export default PayPostageModalWin;
