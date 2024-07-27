import { FC } from 'react';
import { IProps } from './PersonalAccountStatementsModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container } from './PersonalAccountStatementsModalWin.styled';

const PersonalAccountStatementsModalWin: FC<IProps> = ({
  setModalWinState,
}) => {
  // const { isLoading, onActionBtnClick } = usePayPostageModalWin();

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Виписки по особовому рахунку:' />
        {/* <ContentContainer>
          <PeriodTitle />
          <ActionBtn
            title='Сформувати'
            isLoading={isLoading}
            onBtnClick={onActionBtnClick}
          />
        </ContentContainer> */}
      </Container>
    </ModalWin>
  );
};

export default PersonalAccountStatementsModalWin;
