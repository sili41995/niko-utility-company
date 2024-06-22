import {
  IGetSubscriberAccountSelectData,
  IGetSubscriberAccountSelectDataProps,
} from '@/types/data.types';

const getSubscriberAccountSelectData = ({
  streets,
  houses,
  accountTypes,
}: IGetSubscriberAccountSelectDataProps): IGetSubscriberAccountSelectData => {
  const streetsSelectData = streets.map(({ name, type, id }) => ({
    title: `${type} ${name}`,
    value: String(id),
  }));
  const housesSelectData = houses.map(({ id, number }) => ({
    title: number,
    value: String(id),
  }));
  const accountTypesSelectData = accountTypes.map((type) => ({
    title: type,
    value: type,
  }));

  return { streetsSelectData, housesSelectData, accountTypesSelectData };
};

export default getSubscriberAccountSelectData;
