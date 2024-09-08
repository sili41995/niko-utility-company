import { IGetUpdatedTariffDataProps, INewTariff } from '@/types/tariff.types';

const getUpdatedTariffData = ({
  data,
  sector,
}: IGetUpdatedTariffDataProps): INewTariff => ({
  ...data,
  sector,
  start: new Date(data.start),
  price: Number(data.price),
});

export default getUpdatedTariffData;
