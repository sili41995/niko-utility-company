import {
  IGetSubscriberAccountDataProps,
  IGetSubscriberAccountData,
} from '@/types/types';

const getSubscriberAccountSelectData = ({
  streets,
  houses,
}: IGetSubscriberAccountDataProps): IGetSubscriberAccountData => {
  const streetsData = streets.map(({ name, type, id }) => ({
    title: `${type} ${name}`,
    value: String(id),
  }));
  const housesData = houses.map(({ id, number }) => ({
    title: number,
    value: String(id),
  }));

  return { streetsData, housesData };
};

export default getSubscriberAccountSelectData;
