import { FC } from 'react';
import { Accent, Text } from './PeriodTitle.styled';
import { useCurrentPeriodDate } from '@/hooks';
import { IProps } from './PeriodTitle.types';
import { getPeriodDate } from '@/utils';

const PeriodTitle: FC<IProps> = ({ targetPeriod, isTitle = false }) => {
  const currentPeriodDate = useCurrentPeriodDate();
  const targetPeriodDate = getPeriodDate(targetPeriod);
  const periodDate = targetPeriod ? targetPeriodDate : currentPeriodDate;

  return (
    <Text isTitle={isTitle}>
      Поточний період: <Accent>{periodDate}</Accent>
    </Text>
  );
};

export default PeriodTitle;
