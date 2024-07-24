import { FC } from 'react';
import { IProps } from './AccountsMessageModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container, ContentContainer } from './AccountsMessageModalWin.styled';
import PeriodTitle from '../PeriodTitle';
import ActionBtn from '../ActionBtn';
import { useAccountsMessageModalWin } from '@/hooks';

const AccountsMessageModalWin: FC<IProps> = ({ setModalWinState }) => {
  const { isLoading, onActionBtnClick } = useAccountsMessageModalWin();

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Рахунки-повідомлення:' />
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

export default AccountsMessageModalWin;
