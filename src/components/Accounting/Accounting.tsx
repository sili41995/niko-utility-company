import { FC } from 'react';
import AccountingSections from '@/components/AccountingSections';
import { Container, StatisticsWrap } from './Accounting.styled';
import AccountingStatistics from '@/components/AccountingStatistics';
import AccountingTitle from '@/components/AccountingTitle';
import AccountingReports from '@/components/AccountingReports';

const Accounting: FC = () => {
  return (
    <Container>
      <AccountingSections />
      <StatisticsWrap>
        <AccountingTitle />
        <AccountingStatistics />
        <AccountingReports />
      </StatisticsWrap>
    </Container>
  );
};

export default Accounting;
