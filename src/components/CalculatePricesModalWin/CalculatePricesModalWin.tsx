import { FC } from 'react';
import { IProps } from './CalculatePricesModalWin.types';
import ModalWin from '../ModalWin';
import FormDataTitle from '../FormDataTitle';
import {
  Accent,
  Container,
  Date,
  Text,
  ContentWrap,
} from './CalculatePricesModalWin.styled';
import ActionBtn from '../ActionBtn';
import ErrorMessage from '../ErrorMessage';
import { useCalculatePrices } from '@/hooks';
import Loader from '../Loader';

const CalculatePricesModalWin: FC<IProps> = ({ setModalWinState }) => {
  const {
    currentDate,
    lastPricesCalculate,
    isLoading,
    calculatePrices,
    error,
  } = useCalculatePrices();

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Нарахування за період:' />
        <ContentWrap>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Text>
                Поточний період: <Accent>{currentDate}</Accent>
              </Text>
              <Text>
                Останнє нарахування: <Date>{lastPricesCalculate}</Date>
              </Text>
              <ActionBtn
                title='Перерахувати'
                isLoading={isLoading}
                onBtnClick={calculatePrices}
              />
            </>
          )}
        </ContentWrap>
        {error && <ErrorMessage error={error} />}
      </Container>
    </ModalWin>
  );
};

export default CalculatePricesModalWin;
