import { Tariffs } from '@/types/data.types';
import { IFilterTariffsBySectorProps } from '@/types/types';

const filterTariffsBySector = ({
  tariffs,
  sector,
}: IFilterTariffsBySectorProps): Tariffs =>
  tariffs.filter((tariff) => tariff.sector === sector);

export default filterTariffsBySector;
