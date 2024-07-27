import { FC } from 'react';
import { IProps } from './CalcBySubscribersDebtModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container } from './CalcBySubscribersDebtModalWin.styled';

const CalcBySubscribersDebtModalWin: FC<IProps> = ({ setModalWinState }) => {
  // const { isLoading, onActionBtnClick } = usePayPostageModalWin();

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Розрахунки по абонентах (борг):' />
        {/* <ContentContainer>
          <PeriodTitle />
          <ActionBtn
            title='Сформувати'
            isLoading={isLoading}
            onBtnClick={onActionBtnClick}
          />
        </ContentContainer> */}
      </Container>
    </ModalWin>
  );
};

export default CalcBySubscribersDebtModalWin;
