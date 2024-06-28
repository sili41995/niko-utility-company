import { FC } from 'react';
import AccountingSections from '../AccountingSections';
import { Container, StatisticsWrap } from './Accounting.styled';

const Accounting: FC = () => {
  return (
    <Container>
      <AccountingSections />
      <StatisticsWrap>
        <p>AccountingStatistics</p>
      </StatisticsWrap>
    </Container>
  );
};

export default Accounting;
