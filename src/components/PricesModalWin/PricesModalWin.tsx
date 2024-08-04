import { FC } from 'react';
import { IProps } from './PricesModalWin.types';
import ModalWin from '@/components/ModalWin';
import FormDataTitle from '@/components/FormDataTitle';
import { Container, Date, Text, ContentWrap } from './PricesModalWin.styled';
import ActionBtn from '@/components/ActionBtn';
import { useCalculatePrices } from '@/hooks';
import Loader from '@/components/Loader';
import PeriodTitle from '@/components/PeriodTitle';

const PricesModalWin: FC<IProps> = ({ setModalWinState }) => {
  const { isLoading, calculatePrices, lastPricesCalculate } =
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
      </Container>
    </ModalWin>
  );
};

export default PricesModalWin;
