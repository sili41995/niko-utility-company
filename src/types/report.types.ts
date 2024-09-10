import { IHousesLocationData } from './types';

export interface IReportsBySubscribersData extends IHousesLocationData {
  minDebt: number;
  periodId: string;
}

export interface IReportsBySubscribersFormData
  extends Omit<IReportsBySubscribersData, 'minDebt'> {
  minDebt: string;
}
