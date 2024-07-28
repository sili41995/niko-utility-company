import { ISubscriberAccount } from '@/types/subscriberAccount.types';
import { OnBtnClickFunc } from '@/types/types';

export interface IProps {
  subscriberAccount: ISubscriberAccount | null;
  resetSubscriberAccount?: OnBtnClickFunc;
}
