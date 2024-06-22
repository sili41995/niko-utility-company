import {
  IGetSubscriberAccountDataProps,
  IGetSubscriberAccountData,
} from '@/types/data.types';

const getSubscriberAccountSelectData = ({
  streets,
  houses,
  accountTypes,
}: IGetSubscriberAccountDataProps): IGetSubscriberAccountData => {
  const streetsData = streets.map(({ name, type, id }) => ({
    title: `${type} ${name}`,
    value: String(id),
  }));
  const housesData = houses.map(({ id, number }) => ({
    title: number,
    value: String(id),
  }));
  const accountTypesData = accountTypes.map((type) => ({
    title: type,
    value: type,
  }));

  return { streetsData, housesData, accountTypesData };
};

export default getSubscriberAccountSelectData;
