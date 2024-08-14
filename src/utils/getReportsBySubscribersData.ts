import {
  IReportsBySubscribersData,
  IReportsBySubscribersFormData,
} from '@/types/data.types';

const getReportsBySubscribersData = (
  data: IReportsBySubscribersFormData
): IReportsBySubscribersData => ({ ...data, minDebt: Number(data.minDebt) });

export default getReportsBySubscribersData;
