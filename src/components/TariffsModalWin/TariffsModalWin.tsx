import { FC, useEffect } from 'react';
import ModalWin from '@/components/ModalWin';
import { IProps } from './Tariffs.types';
import { Container, ContentWrap } from './TariffsModalWin.styled';
import FormDataTitle from '@/components/FormDataTitle';
import ErrorMessage from '@/components/ErrorMessage';
import Loader from '@/components/Loader';
import TariffsList from '@/components/TariffsList';
import { useTariffsStore } from '@/store/store';
import {
  selectError,
  selectFetchTariffs,
  selectIsLoaded,
  selectIsLoading,
} from '@/store/tariffs/selectors';

const TariffsModalWin: FC<IProps> = ({ setModalWinState }) => {
  const isLoaded = useTariffsStore(selectIsLoaded);
  const isLoading = useTariffsStore(selectIsLoading);
  const isLoadingData = !isLoaded && isLoading;
  const error = useTariffsStore(selectError);
  const fetchTariffs = useTariffsStore(selectFetchTariffs);

  useEffect(() => {
    fetchTariffs();
  }, [fetchTariffs]);

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Тарифи на послуги:' />
        <ContentWrap>
          {isLoadingData ? <Loader /> : <TariffsList />}
        </ContentWrap>
        {error && <ErrorMessage error={error} />}
      </Container>
    </ModalWin>
  );
};

export default TariffsModalWin;
