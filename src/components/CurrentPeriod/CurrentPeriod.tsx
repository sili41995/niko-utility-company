import { FC } from 'react';
import { Accent, Text } from './CurrentPeriod.styled';
import { useCurrentPeriod } from '@/hooks';
import { IProps } from './CurrentPeriod.types';

const CurrentPeriod: FC<IProps> = ({ isTitle = false }) => {
  const currentPeriod = useCurrentPeriod();

  return (
    <Text isTitle={isTitle}>
      Поточний період: <Accent>{currentPeriod}</Accent>
    </Text>
  );
};

export default CurrentPeriod;
