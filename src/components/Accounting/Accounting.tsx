import { FC } from 'react';
import AccountingSections from '@/components/AccountingSections';
import { Container, StatisticsWrap } from './Accounting.styled';
import AccountingStatistics from '@/components/AccountingStatistics';

const Accounting: FC = () => {
  return (
    <Container>
      <AccountingSections />
      <StatisticsWrap>
        <AccountingStatistics />
      </StatisticsWrap>
    </Container>
  );
};

export default Accounting;
