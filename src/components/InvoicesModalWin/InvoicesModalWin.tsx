import { FC } from 'react';
import { IProps } from './InvoicesModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container, ContentContainer } from './InvoicesModalWin.styled';
import PeriodTitle from '@/components/PeriodTitle';
import InvoicesForm from '@/components/InvoicesForm';
import { useStreetsData } from '@/hooks';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';

const InvoicesModalWin: FC<IProps> = ({ setModalWinState }) => {
  const { isLoadingData, housesError, streetsError } = useStreetsData();

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Рахунки-повідомлення:' />
        <ContentContainer>
          <PeriodTitle />
          {isLoadingData ? <Loader /> : <InvoicesForm />}
        </ContentContainer>
        {housesError && <ErrorMessage error={housesError} />}
        {streetsError && <ErrorMessage error={streetsError} />}
      </Container>
    </ModalWin>
  );
};

export default InvoicesModalWin;
