import { FC } from 'react';
import { IProps } from './PriceAdjustmentsTotalsModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container } from './PriceAdjustmentsTotalsModalWin.styled';

const PriceAdjustmentsTotalsModalWin: FC<IProps> = ({ setModalWinState }) => {
  // const { isLoading, onActionBtnClick } = usePayPostageModalWin();

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Коригування по нарахуванням (підсумки):' />
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

export default PriceAdjustmentsTotalsModalWin;
