import { FC } from 'react';
import { IProps } from './AccountsMessageModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container, ContentContainer } from './AccountsMessageModalWin.styled';
import PeriodTitle from '@/components/PeriodTitle';
import AccountsMessageForm from '@/components/AccountsMessageForm';
import { useStreetsData } from '@/hooks';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';

const AccountsMessageModalWin: FC<IProps> = ({ setModalWinState }) => {
  const { isLoadingStreets, housesError, streetsError } = useStreetsData();

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Рахунки-повідомлення:' />
        <ContentContainer>
          <PeriodTitle />
          {isLoadingStreets ? <Loader /> : <AccountsMessageForm />}
        </ContentContainer>
        {housesError && <ErrorMessage error={housesError} />}
        {streetsError && <ErrorMessage error={streetsError} />}
      </Container>
    </ModalWin>
  );
};

export default AccountsMessageModalWin;
