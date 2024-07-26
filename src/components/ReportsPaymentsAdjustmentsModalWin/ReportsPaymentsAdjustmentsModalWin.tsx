import { FC } from 'react';
import { IProps } from './ReportsPaymentsAdjustmentsModalWin.types';
import ModalWin from '../ModalWin';
import FormDataTitle from '../FormDataTitle';
import { Container } from './ReportsPaymentsAdjustmentsModalWin.styled';

const ReportsPaymentsAdjustmentsModalWin: FC<IProps> = ({
  setModalWinState,
}) => {
  // const { isLoading, onActionBtnClick } = usePayPostageModalWin();

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Оплати (коригування):' />
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

export default ReportsPaymentsAdjustmentsModalWin;
