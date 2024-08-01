import { FC } from 'react';
import { IProps } from './CalculatePricesModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import {
  Container,
  Date,
  Text,
  ContentWrap,
} from './CalculatePricesModalWin.styled';
import ActionBtn from '@/components/ActionBtn';
import ErrorMessage from '@/components/ErrorMessage';
import { useCalculatePrices } from '@/hooks';
import Loader from '@/components/Loader';
import PeriodTitle from '@/components/PeriodTitle';

const CalculatePricesModalWin: FC<IProps> = ({ setModalWinState }) => {
  const { isLoading, calculatePrices, error, lastPricesCalculate } =
    useCalculatePrices();

  return (
    <ModalWin setModalWinState={setModalWinState}>
      <Container>
        <FormDataTitle title='Нарахування за період:' />
        <ContentWrap>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <PeriodTitle />
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
