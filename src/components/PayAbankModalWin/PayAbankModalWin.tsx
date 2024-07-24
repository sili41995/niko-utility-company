import { FC } from 'react';
import { IProps } from './PayAbankModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container, ContentContainer } from './PayAbankModalWin.styled';
import PeriodTitle from '@/components/PeriodTitle';
import ActionBtn from '@/components/ActionBtn';
import { usePayAbankModalWin } from '@/hooks';

const PayAbankModalWin: FC<IProps> = ({ setModalWinState }) => {
  const { isLoading, onActionBtnClick } = usePayAbankModalWin();

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Оплати Абанк:' />
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

export default PayAbankModalWin;
