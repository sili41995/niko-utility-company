import { ISubscriberAccount } from '@/types/data.types';

export interface IProps {
  subscriberAccount: ISubscriberAccount;
}

export interface IStyledTableDataTextProps {
  trimText?: boolean;
  center?: boolean;
}

export interface IStyledTableDataProps {
  center?: boolean;
}
