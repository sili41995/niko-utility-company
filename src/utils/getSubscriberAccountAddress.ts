import { IFullSubscriberAccount } from '@/types/subscriberAccount.types';

const getSubscriberAccountAddress = ({
  street,
  house,
  apartment,
}: IFullSubscriberAccount): string => {
  const houseAddress = `${street.type} ${street.name}, буд. ${house.number}`;

  return apartment ? `${houseAddress}, кв. ${apartment}` : houseAddress;
};

export default getSubscriberAccountAddress;
