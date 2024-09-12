import { selectPeriods } from '@/store/periods/selectors';
import { usePeriodsStore } from '@/store/store';
import { FC } from 'react';
import {
  Backdrop,
  Container,
  List,
  ListItem,
  RadioBtn,
  RadioBtnLabel,
  RadioBtnTitle,
} from './PeriodsList.styled';
import { DateFormats, SearchParamsKeys } from '@/constants';
import { formatDate, getPeriodDate } from '@/utils';
import { useSetSearchParams } from '@/hooks';
import { InputChangeEvent } from '@/types/types';
import { IProps } from './PeriodsList.types';

const PeriodsList: FC<IProps> = ({ setPeriodsListState }) => {
  const periods = usePeriodsStore(selectPeriods);
  const { searchParams, updateSearchParams } = useSetSearchParams();
  const targetMonth = searchParams.get(SearchParamsKeys.month) ?? '';

  const onPeriodChange = (e: InputChangeEvent) => {
    const { value, name: key } = e.currentTarget;
    updateSearchParams({ key, value });
    setPeriodsListState();
  };

  const onBackdropClick = () => {
    setPeriodsListState();
  };

  return (
    <>
      <Container>
        <List>
          {periods.map((period) => {
            const { start, isCurrentPeriod, id } = period;
            const btnTitle = getPeriodDate(period);
            const periodMonth = formatDate({
              date: start,
              dateFormat: DateFormats.monthNumber,
            });
            const periodValue = isCurrentPeriod ? '' : periodMonth;
            const isTargetPeriod = targetMonth === periodValue;

            return (
              <ListItem key={id}>
                <RadioBtnLabel>
                  <RadioBtn
                    type='radio'
                    name={SearchParamsKeys.month}
                    value={periodValue}
                    onChange={onPeriodChange}
                  />
                  <RadioBtnTitle isTargetPeriod={isTargetPeriod}>
                    {btnTitle}
                  </RadioBtnTitle>
                </RadioBtnLabel>
              </ListItem>
            );
          })}
        </List>
      </Container>
      <Backdrop onClick={onBackdropClick}></Backdrop>
    </>
  );
};

export default PeriodsList;
