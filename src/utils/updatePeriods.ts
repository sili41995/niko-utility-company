import { FullPeriods, IUpdatePeriodsProps } from '@/types/period.types';

const updatePeriods = ({
  periods,
  newPeriod,
}: IUpdatePeriodsProps): FullPeriods => {
  const updatedPeriods = periods.map((period) =>
    period.isCurrentPeriod ? { ...period, isCurrentPeriod: false } : period
  );

  return [newPeriod, ...updatedPeriods];
};

export default updatePeriods;
