import { Payments } from './payment.types';

export interface IPeriod {
  id: number;
  isCurrentPeriod: boolean;
  start: Date;
}

export type Periods = IPeriod[];

export interface IFullPeriod extends IPeriod {
  payments: Payments;
}

export type FullPeriods = IFullPeriod[];

export interface IUpdatePeriodsProps {
  periods: FullPeriods;
  newPeriod: IFullPeriod;
}

export interface IGetUpdatedPeriodsProps {
  periods: FullPeriods;
  updatedPeriod: IFullPeriod;
}

export interface IPeriodId {
  periodId: number;
}

export interface ITimePeriod {
  from: string;
  to: string;
}
