import { ISubscriberAccount } from '@/types/data.types';
import { Func } from '@/types/types';

export interface IProps {
  setModalWinState: Func;
  subscriberAccount: ISubscriberAccount;
}
