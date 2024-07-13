import { ISubscriberAccount } from '@/types/subscriberAccount.types';

const getSubscriberAccountInfo = ({
  subscriberAccount,
  owner,
}: ISubscriberAccount): string =>
  `${subscriberAccount} - ${owner.surname} ${owner.name} ${owner.middleName}`;

export default getSubscriberAccountInfo;
