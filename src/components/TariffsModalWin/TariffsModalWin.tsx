import { FC, useEffect } from 'react';
import ModalWin from '../ModalWin';
import { IProps } from './Tariffs.types';
import { Container } from './TariffsModalWin.styled';
import AddDataTitle from '../FormDataTitle';
import ErrorMessage from '../ErrorMessage';
import Loader from '../Loader';
import TariffsList from '../TariffsList';
import { useTariffsStore } from '@/store/store';
import {
  selectError,
  selectFetchTariffs,
  selectIsLoaded,
  selectIsLoading,
} from '@/store/tariffs/selectors';

const TariffsModalWin: FC<IProps> = ({
  setModalWinState,
}) => {
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
        <AddDataTitle title='Тарифи на послуги:' />
        {isLoadingData ? (
          <Loader />
        ) : (
          <>
            {!error && (
              <TariffsList
              />
            )}
            {error && <ErrorMessage error={error} />}
          </>
        )}
      </Container>
    </ModalWin>
  );
};

export default TariffsModalWin;
