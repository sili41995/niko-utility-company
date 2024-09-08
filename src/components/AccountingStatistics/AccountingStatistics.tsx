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
  // const { payments } = targetPeriod ?? {};
  // const paymentsValue = payments?.reduce((acc, { amount }) => acc + amount, 0);

  return (
    <List>
      <ListItem>
        <StatisticsItem>
          <Title>Всього а/р:</Title>
          <Value>{'subscriberAccounts'}</Value>
        </StatisticsItem>
      </ListItem>
      <ListItem>
        <StatisticsItem>
          <Title>Всього мешканців:</Title>
          <Value>{'residents'}</Value>
        </StatisticsItem>
      </ListItem>
      <ListItem>
        <ExtendedInfo>
          <StatisticsItem>
            <Title>Сальдо початок:</Title>
            <Value>{'balanceStart'}</Value>
          </StatisticsItem>
          <Value>тут буде число</Value>
        </ExtendedInfo>
      </ListItem>
      <ListItem>
        <StatisticsItem>
          <Title>Нараховано:</Title>
          <Value>{'accrued'}</Value>
        </StatisticsItem>
      </ListItem>
      <ListItem>
        <StatisticsItem>
          <Title>Пеня:</Title>
          <Value>{'penalty'}</Value>
        </StatisticsItem>
      </ListItem>
      <ListItem>
        <StatisticsItem>
          <Title>Коригування:</Title>
          <Value>{'adjustment'}</Value>
        </StatisticsItem>
      </ListItem>
      <ListItem>
        <StatisticsItem>
          <Title>Оплати:</Title>
          <Value>{'paymentsValue'}</Value>
        </StatisticsItem>
      </ListItem>
      <ListItem>
        <StatisticsItem>
          <Title>Пільги:</Title>
          <Value>{'benefits'}</Value>
        </StatisticsItem>
      </ListItem>
      <ListItem>
        <StatisticsItem>
          <Title>Субсидії:</Title>
          <Value>{'subsidies'}</Value>
        </StatisticsItem>
      </ListItem>
      <ListItem>
        <ExtendedInfo>
          <StatisticsItem>
            <Title>Сальдо кінець:</Title>
            <Value>{'balanceEnd'}</Value>
          </StatisticsItem>
          <Value>тут буде число</Value>
        </ExtendedInfo>
      </ListItem>
    </List>
  );
};

export default AccountingStatistics;
