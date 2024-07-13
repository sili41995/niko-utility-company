import { FC } from 'react';
import AccountingSections from '@/components/AccountingSections';
import { Container, StatisticsWrap } from './Accounting.styled';
import AccountingStatistics from '@/components/AccountingStatistics';
import AccountingTitle from '@/components/AccountingTitle';

const Accounting: FC = () => {
  return (
    <Container>
      <AccountingSections />
      <StatisticsWrap>
        <AccountingTitle />
        <AccountingStatistics />
      </StatisticsWrap>
    </Container>
  );
};

export default Accounting;
