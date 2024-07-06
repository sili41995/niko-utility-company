import { FC } from 'react';
import AccountingSections from '@/components/AccountingSections';
import { Container, StatisticsWrap } from './Accounting.styled';
import AccountingStatistics from '@/components/AccountingStatistics';
import CurrentPeriod from '../CurrentPeriod';

const Accounting: FC = () => {
  return (
    <Container>
      <AccountingSections />
      <StatisticsWrap>
        <CurrentPeriod isTitle />
        <AccountingStatistics />
      </StatisticsWrap>
    </Container>
  );
};

export default Accounting;
