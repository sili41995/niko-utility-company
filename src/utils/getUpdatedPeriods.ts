import { Periods } from '@/types/data.types';
import { IGetUpdatedPeriodsProps } from '@/types/types';

const getUpdatedPeriods = ({
  periods,
  updatedPeriod,
}: IGetUpdatedPeriodsProps): Periods =>
  periods.map((period) =>
    period.id === updatedPeriod.id ? updatedPeriod : period
  );

export default getUpdatedPeriods;
