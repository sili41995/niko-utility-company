import { FC } from 'react';
import {
  ExtendedInfo,
  List,
  ListItem,
  StatisticsItem,
  Title,
  Value,
} from './AccountingStatistics.styled';
// import { useTargetPeriod } from '@/hooks';

const AccountingStatistics: FC = () => {
  // const targetPeriod = useTargetPeriod();

  return (
    <List>
      <ListItem>
        <StatisticsItem>
          <Title>Всього а/р:</Title>
          <Value>0000</Value>
        </StatisticsItem>
      </ListItem>
      <ListItem>
        <StatisticsItem>
          <Title>Всього мешканців:</Title>
          <Value>0000</Value>
        </StatisticsItem>
      </ListItem>
      <ListItem>
        <ExtendedInfo>
          <StatisticsItem>
            <Title>Сальдо початок:</Title>
            <Value>0000</Value>
          </StatisticsItem>
          <Value>0000</Value>
        </ExtendedInfo>
      </ListItem>
      <ListItem>
        <StatisticsItem>
          <Title>Нараховано:</Title>
          <Value>0000</Value>
        </StatisticsItem>
      </ListItem>
      <ListItem>
        <StatisticsItem>
          <Title>Пеня:</Title>
          <Value>0000</Value>
        </StatisticsItem>
      </ListItem>
      <ListItem>
        <StatisticsItem>
          <Title>Коригування:</Title>
          <Value>0000</Value>
        </StatisticsItem>
      </ListItem>
      <ListItem>
        <StatisticsItem>
          <Title>Оплати:</Title>
          <Value>0000</Value>
        </StatisticsItem>
      </ListItem>
      <ListItem>
        <StatisticsItem>
          <Title>Пільги:</Title>
          <Value>0000</Value>
        </StatisticsItem>
      </ListItem>
      <ListItem>
        <StatisticsItem>
          <Title>Субсидії:</Title>
          <Value>0000</Value>
        </StatisticsItem>
      </ListItem>
      <ListItem>
        <ExtendedInfo>
          <StatisticsItem>
            <Title>Сальдо кінець:</Title>
            <Value>0000</Value>
          </StatisticsItem>
          <Value>00000000</Value>
        </ExtendedInfo>
      </ListItem>
    </List>
  );
};

export default AccountingStatistics;
