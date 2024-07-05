import { FC } from 'react';
import { IProps } from './AddPeriodModalWin.types';
import ModalWin from '../ModalWin';
import FormDataTitle from '../FormDataTitle';
import {
  Accent,
  Container,
  Text,
  ContentWrap,
} from './AddPeriodModalWin.styled';
import ActionBtn from '../ActionBtn';
import ErrorMessage from '../ErrorMessage';
import { useAddPeriod } from '@/hooks';
import Loader from '../Loader';

const AddPeriodModalWin: FC<IProps> = ({ setModalWinState }) => {
  const { currentPeriodDate, isLoading, error, onAddPeriodBtnClick } =
    useAddPeriod();

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Новий період:' />
        <ContentWrap>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Text>
                Поточний період: <Accent>{currentPeriodDate}</Accent>
              </Text>
              <Text>Ви дійсно хочете додати новий період?</Text>
              <ActionBtn
                title='Додати'
                isLoading={isLoading}
                onBtnClick={onAddPeriodBtnClick}
              />
            </>
          )}
        </ContentWrap>
        {error && <ErrorMessage error={error} />}
      </Container>
    </ModalWin>
  );
};

export default AddPeriodModalWin;
