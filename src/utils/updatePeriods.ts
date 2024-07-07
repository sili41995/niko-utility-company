import { Periods } from '@/types/data.types';
import { IUpdatePeriodsProps } from '@/types/types';

const updatePeriods = ({
  periods,
  newPeriod,
}: IUpdatePeriodsProps): Periods => {
  const updatedPeriods = periods.map((period) =>
    period.isCurrentPeriod ? { ...period, isCurrentPeriod: false } : period
  );

  return [newPeriod, ...updatedPeriods];
};

export default updatePeriods;
