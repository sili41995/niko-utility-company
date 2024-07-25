import { FC } from 'react';
import { IProps } from './CalcByStreetsModalWin.types';
import ModalWin from '../ModalWin';
import FormDataTitle from '../FormDataTitle';
import { Container } from './CalcByStreetsModalWin.styled';

const CalcByStreetsModalWin: FC<IProps> = ({ setModalWinState }) => {
  // const { isLoading, onActionBtnClick } = usePayPostageModalWin();

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Розрахунки по вулицях:' />
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

export default CalcByStreetsModalWin;
