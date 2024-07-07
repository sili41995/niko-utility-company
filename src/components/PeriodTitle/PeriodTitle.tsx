import { FC } from 'react';
import { Accent, Text } from './PeriodTitle.styled';
import { useCurrentPeriod } from '@/hooks';
import { IProps } from './PeriodTitle.types';
import { getPeriodDate } from '@/utils';

const PeriodTitle: FC<IProps> = ({ targetPeriod, isTitle = false }) => {
  const currentPeriod = useCurrentPeriod();
  const targetPeriodDate = getPeriodDate(targetPeriod);
  const period = targetPeriod ? targetPeriodDate : currentPeriod;

  return (
    <Text isTitle={isTitle}>
      Поточний період: <Accent>{period}</Accent>
    </Text>
  );
};

export default PeriodTitle;
