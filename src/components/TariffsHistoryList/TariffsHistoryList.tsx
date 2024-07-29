import { FC } from 'react';
import { IProps } from './TariffsHistoryList.types';
import CloseBtn from '@/components/CloseBtn';
import {
  Container,
  List,
  ListItem,
  PeriodWrap,
  PriceWrap,
  TariffWrap,
  Text,
  Title,
  TitleWrap,
  Units,
} from './TariffsHistoryList.styled';
import { formatDate, getTariffUnits } from '@/utils';
import { DateFormats } from '@/constants';

const TariffsHistoryList: FC<IProps> = ({ tariffs, onCloseBtnClick }) => {
  const tariffUnits = getTariffUnits(tariffs[0].sector);

  return (
    <Container>
      <TitleWrap>
        <Title>Історія зміни тарифів</Title>
        <CloseBtn onClick={onCloseBtnClick} />
      </TitleWrap>
      <List>
        {tariffs.map(({ id, start, price }) => {
          const startDate = formatDate({
            date: start,
            dateFormat: DateFormats.date,
          });

          return (
            <ListItem key={id}>
              <TariffWrap>
                <PriceWrap>
                  <Text>Тариф</Text>
                  <Text>
                    {price} <Units>{tariffUnits}</Units>
                  </Text>
                </PriceWrap>
                <PeriodWrap>
                  <Text>Діє з</Text>
                  <Text>{startDate}</Text>
                </PeriodWrap>
              </TariffWrap>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default TariffsHistoryList;
