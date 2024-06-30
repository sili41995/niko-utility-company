import { FC } from 'react';
import { IProps } from './CalculatePricesModalWin.types';
import ModalWin from '../ModalWin';
import FormDataTitle from '../FormDataTitle';
import { Accent, Date, Text } from './CalculatePricesModalWin.styled';
import ActionBtn from '../ActionBtn';
import ErrorMessage from '../ErrorMessage';
import { useCalculatePrices } from '@/hooks';

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
      <FormDataTitle title='Нарахування за період:' />
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
      {error && <ErrorMessage error={error} />}
    </ModalWin>
  );
};

export default CalculatePricesModalWin;
