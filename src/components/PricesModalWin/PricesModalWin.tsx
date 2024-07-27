import { FC } from 'react';
import { IProps } from './PricesModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container } from './PricesModalWin.styled';

const PricesModalWin: FC<IProps> = ({ setModalWinState }) => {
  // const { isLoading, onActionBtnClick } = usePayPostageModalWin();

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Нарахування:' />
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

export default PricesModalWin;
