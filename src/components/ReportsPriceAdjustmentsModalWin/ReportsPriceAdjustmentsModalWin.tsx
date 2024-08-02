import { FC } from 'react';
import { IProps } from './ReportsPriceAdjustmentsModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container } from './ReportsPriceAdjustmentsModalWin.styled';

const ReportsPriceAdjustmentsModalWin: FC<IProps> = ({ setModalWinState }) => {
  // const { isLoading, onActionBtnClick } = usePayPostageModalWin();

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Коригування по нарахуванням:' />
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

export default ReportsPriceAdjustmentsModalWin;
