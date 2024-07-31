import { IPeriod } from '@/types/data.types';
import { ISubscriberAccount } from '@/types/subscriberAccount.types';

export interface IProps {
  period: IPeriod;
  subscriberAccount: ISubscriberAccount;
}

export interface IStyledTableDataProps {
  center?: boolean;
  capitalize?: boolean;
  isDebt?: boolean;
}
