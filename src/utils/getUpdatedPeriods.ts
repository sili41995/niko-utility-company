import { FullPeriods, IGetUpdatedPeriodsProps } from '@/types/period.types';

const getUpdatedPeriods = ({
  periods,
  updatedPeriod,
}: IGetUpdatedPeriodsProps): FullPeriods =>
  periods.map((period) =>
    period.id === updatedPeriod.id ? updatedPeriod : period
  );

export default getUpdatedPeriods;
