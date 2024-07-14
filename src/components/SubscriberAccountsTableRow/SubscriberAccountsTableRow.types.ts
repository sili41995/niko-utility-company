import { ISubscriberAccount } from '@/types/subscriberAccount.types';

export interface IProps {
  subscriberAccount: ISubscriberAccount;
}

export interface IStyledTableDataTextProps {
  trimText?: boolean;
  center?: boolean;
}

export interface IStyledTableDataProps {
  center?: boolean;
  isBalance?: boolean;
  isDebt?: boolean;
}
