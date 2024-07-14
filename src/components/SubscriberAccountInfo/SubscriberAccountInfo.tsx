import { FC } from 'react';
import {
  Accent,
  Container,
  ResetBtn,
  Text,
  TextWrap,
} from './SubscriberAccountInfo.styled';
import PeriodTitle from '../PeriodTitle';
import { IProps } from './SubscriberAccountInfo.types';
import { GrUpdate } from 'react-icons/gr';
import { BtnTypes, IconSizes } from '@/constants';

const SubscriberAccountInfo: FC<IProps> = ({
  address,
  subscriberAccountInfo,
  resetSubscriberAccount,
}) => (
  <Container>
    <PeriodTitle />
    <Text>
      Адреса: <Accent>{address}</Accent>
    </Text>
    <TextWrap>
      <Text>
        Абонентський рахунок: <Accent>{subscriberAccountInfo}</Accent>
      </Text>
      <ResetBtn type={BtnTypes.button} onClick={resetSubscriberAccount}>
        <GrUpdate size={IconSizes.primary} />
      </ResetBtn>
    </TextWrap>
  </Container>
);

export default SubscriberAccountInfo;
