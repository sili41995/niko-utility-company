export interface IReportsBySubscribersData extends IHousesLocationData {
  minDebt: number;
  periodId: string;
}

export interface IReportsBySubscribersFormData
  extends Omit<IReportsBySubscribersData, 'minDebt'> {
  minDebt: string;
}

export type MinDebt = Pick<IReportsBySubscribersFormData, 'minDebt'>;

export type PeriodIdString = Pick<IReportsBySubscribersFormData, 'periodId'>;
