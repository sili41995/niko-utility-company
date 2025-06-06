import { IFullSubscriberAccount } from '@/types/subscriberAccount.types';
import { Func } from '@/types/types';

export interface IProps {
  setModalWinState: Func;
  subscriberAccount: IFullSubscriberAccount;
}
