export interface IPeriod {
  id: number;
  isCurrentPeriod: boolean;
  start: Date;
}

export type Periods = IPeriod[];

export interface IUpdatePeriodsProps {
  periods: Periods;
  newPeriod: IPeriod;
}

export interface IGetUpdatedPeriodsProps {
  periods: Periods;
  updatedPeriod: IPeriod;
}

export interface IPeriodId {
  periodId: number;
}

export interface ITimePeriod {
  from: string;
  to: string;
}

export type DateFrom = Pick<ITimePeriod, 'from'>;

export type DateTo = Pick<ITimePeriod, 'to'>;
