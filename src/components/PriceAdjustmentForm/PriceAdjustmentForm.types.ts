import { IFullSubscriberAccount } from '@/types/subscriberAccount.types';
import { OnBtnClickFunc } from '@/types/types';

export interface IProps {
  subscriberAccount: IFullSubscriberAccount;
  resetSubscriberAccount: OnBtnClickFunc;
}
