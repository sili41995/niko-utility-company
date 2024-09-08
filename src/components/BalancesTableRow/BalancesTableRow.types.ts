import { IPeriod } from '@/types/period.types';
import { IFullSubscriberAccount } from '@/types/subscriberAccount.types';

export interface IProps {
  period: IPeriod;
  subscriberAccount: IFullSubscriberAccount;
}

export interface IStyledTableDataProps {
  center?: boolean;
  capitalize?: boolean;
  isDebt?: boolean;
}
