import { FC } from 'react';
import { IProps } from './AddPeriodModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container, Text, ContentWrap } from './AddPeriodModalWin.styled';
import ActionBtn from '@/components/ActionBtn';
import { useAddPeriod } from '@/hooks';
import Loader from '@/components/Loader';
import PeriodTitle from '@/components/PeriodTitle';

const AddPeriodModalWin: FC<IProps> = ({ setModalWinState }) => {
  const { isLoading, onAddPeriodBtnClick } = useAddPeriod();

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Новий період:' />
        <ContentWrap>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <PeriodTitle />
              <Text>Ви дійсно хочете додати новий період?</Text>
              <ActionBtn
                title='Додати'
                isLoading={isLoading}
                onBtnClick={onAddPeriodBtnClick}
              />
            </>
          )}
        </ContentWrap>
      </Container>
    </ModalWin>
  );
};

export default AddPeriodModalWin;
