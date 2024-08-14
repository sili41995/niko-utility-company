import { FC } from 'react';
import { IProps } from './ReportsBySubscribersModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container } from './ReportsBySubscribersModalWin.styled';
import { useStreetsData } from '@/hooks';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';
import ReportsBySubscribersForm from '../ReportsBySubscribersForm';

const ReportsBySubscribersModalWin: FC<IProps> = ({ setModalWinState }) => {
  const { isLoadingStreets, housesError, streetsError } = useStreetsData();

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Розрахунки по абонентах (борг):' />
        {isLoadingStreets ? <Loader /> : <ReportsBySubscribersForm />}
        {housesError && <ErrorMessage error={housesError} />}
        {streetsError && <ErrorMessage error={streetsError} />}
      </Container>
    </ModalWin>
  );
};

export default ReportsBySubscribersModalWin;
