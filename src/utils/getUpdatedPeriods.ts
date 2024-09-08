import { IGetUpdatedPeriodsProps, Periods } from '@/types/period.types';

const getUpdatedPeriods = ({
  periods,
  updatedPeriod,
}: IGetUpdatedPeriodsProps): Periods =>
  periods.map((period) =>
    period.id === updatedPeriod.id ? updatedPeriod : period
  );

export default getUpdatedPeriods;
