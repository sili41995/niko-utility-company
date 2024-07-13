import { ISubscriberAccount } from '@/types/subscriberAccount.types';

const getSubscriberAccountAddress = ({
  street,
  house,
  apartment,
}: ISubscriberAccount): string => {
  const houseAddress = `${street.type} ${street.name}, буд. ${house.number}`;

  return apartment ? `${houseAddress}, кв. ${apartment}` : houseAddress;
};

export default getSubscriberAccountAddress;
