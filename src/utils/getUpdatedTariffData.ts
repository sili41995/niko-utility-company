import { NewTariff } from '@/types/data.types';
import { IGetUpdatedTariffDataProps } from '@/types/types';

const getUpdatedTariffData = ({
  data,
  sector,
}: IGetUpdatedTariffDataProps): NewTariff => ({
  ...data,
  sector,
  start: new Date(data.start),
  tariff: Number(data.tariff),
});

export default getUpdatedTariffData;
