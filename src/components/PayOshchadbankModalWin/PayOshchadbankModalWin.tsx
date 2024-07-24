import { FC } from 'react';
import { IProps } from './PayOshchadbankModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container, ContentContainer } from './PayOshchadbankModalWin.styled';
import PeriodTitle from '@/components/PeriodTitle';
import ActionBtn from '@/components/ActionBtn';
import { usePayOshchadbankModalWin } from '@/hooks';

const PayOshchadbankModalWin: FC<IProps> = ({ setModalWinState }) => {
  const { isLoading, onActionBtnClick } = usePayOshchadbankModalWin();

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Оплати Ощадбанк:' />
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

export default PayOshchadbankModalWin;
