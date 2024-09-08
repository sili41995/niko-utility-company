import { IGetUpdatedTariffDataProps, NewTariff } from '@/types/tariff.types';

const getUpdatedTariffData = ({
  data,
  sector,
}: IGetUpdatedTariffDataProps): NewTariff => ({
  ...data,
  sector,
  start: new Date(data.start),
  price: Number(data.tariff),
});

export default getUpdatedTariffData;
