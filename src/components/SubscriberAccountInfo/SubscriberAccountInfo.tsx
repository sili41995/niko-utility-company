import { FC } from 'react';
import {
  Accent,
  Container,
  ResetBtn,
  Text,
  TextWrap,
} from './SubscriberAccountInfo.styled';
import PeriodTitle from '@/components/PeriodTitle';
import { IProps } from './SubscriberAccountInfo.types';
import { GrUpdate } from 'react-icons/gr';
import { BtnTypes, IconSizes } from '@/constants';
import { getSubscriberAccountAddress, getSubscriberAccountInfo } from '@/utils';

const SubscriberAccountInfo: FC<IProps> = ({
  subscriberAccount,
  resetSubscriberAccount,
}) => {
  const address = getSubscriberAccountAddress(subscriberAccount);
  const subscriberAccountInfo = getSubscriberAccountInfo(subscriberAccount);

  return (
    <Container>
      <PeriodTitle />
      <Text>
        Адреса: <Accent>{address}</Accent>
      </Text>
      <TextWrap>
        <Text>
          Абонентський рахунок: <Accent>{subscriberAccountInfo}</Accent>
        </Text>
        {resetSubscriberAccount && (
          <ResetBtn type={BtnTypes.button} onClick={resetSubscriberAccount}>
            <GrUpdate size={IconSizes.primary} />
          </ResetBtn>
        )}
      </TextWrap>
    </Container>
  );
};

export default SubscriberAccountInfo;
