import { IFilterTariffsBySectorProps, FullTariffs } from '@/types/tariff.types';

const filterTariffsBySector = ({
  tariffs,
  sector,
}: IFilterTariffsBySectorProps): FullTariffs =>
  tariffs.filter((tariff) => tariff.sector.name === sector);

export default filterTariffsBySector;
