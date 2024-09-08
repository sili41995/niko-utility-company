import {
  IReportsBySubscribersData,
  IReportsBySubscribersFormData,
} from '@/types/report.types';

const getReportsBySubscribersData = (
  data: IReportsBySubscribersFormData
): IReportsBySubscribersData => ({ ...data, minDebt: Number(data.minDebt) });

export default getReportsBySubscribersData;
