import { FC } from 'react';
import { IProps } from './ReportsPaymentsTotalsByDatesModalWin.types';
import ModalWin from '../ModalWin';
import FormDataTitle from '../FormDataTitle';
import { Container } from './ReportsPaymentsTotalsByDatesModalWin.styled';

const ReportsPaymentsTotalsByDatesModalWin: FC<IProps> = ({
  setModalWinState,
}) => {
  // const { isLoading, onActionBtnClick } = usePayPostageModalWin();

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Оплати (підсумки по датах):' />
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

export default ReportsPaymentsTotalsByDatesModalWin;
