import { FC } from 'react';
import { IProps } from './PayPrivatbankModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container, ContentContainer } from './PayPrivatbankModalWin.styled';
import PeriodTitle from '@/components/PeriodTitle';
import ActionBtn from '@/components/ActionBtn';
import { usePayPrivatbankModalWin } from '@/hooks';

const PayPrivatbankModalWin: FC<IProps> = ({ setModalWinState }) => {
  const { isLoading, onActionBtnClick } = usePayPrivatbankModalWin();

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Оплати Приватбанк:' />
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

export default PayPrivatbankModalWin;
