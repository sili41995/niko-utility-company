import { ISubscriberAccount } from '@/types/subscriberAccount.types';

const getSubscriberAccountInfo = ({
  number,
  owner: { name, surname, middleName },
}: ISubscriberAccount): string =>
  `${number} - ${surname} ${name} ${middleName}`;

export default getSubscriberAccountInfo;
