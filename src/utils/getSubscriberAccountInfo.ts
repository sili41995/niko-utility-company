import { ISubscriberAccountWithOwner } from '@/types/subscriberAccount.types';

const getSubscriberAccountInfo = ({
  number,
  owner: { name, surname, middleName },
}: ISubscriberAccountWithOwner): string =>
  `${number} - ${surname} ${name} ${middleName}`;

export default getSubscriberAccountInfo;
