import { FC } from 'react';
import { Accent, Container, Text } from './SubscriberAccountInfo.styled';
import PeriodTitle from '../PeriodTitle';
import { IProps } from './SubscriberAccountInfo.types';

const SubscriberAccountInfo: FC<IProps> = ({
  address,
  subscriberAccountInfo,
}) => (
  <Container>
    <PeriodTitle />
    <Text>
      Адреса: <Accent>{address}</Accent>
    </Text>
    <Text>
      Абонентський рахунок: <Accent>{subscriberAccountInfo}</Accent>
    </Text>
  </Container>
);

export default SubscriberAccountInfo;
