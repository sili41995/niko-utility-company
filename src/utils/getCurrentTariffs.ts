import { SectorType } from '@/types/sector.types';
import { FullTariffs } from '@/types/tariff.types';
import { IGetCurrentTariffs } from '@/types/tariff.types';

const getCurrentTariffs = (tariffs: FullTariffs): IGetCurrentTariffs => {
  const date = new Date();

  const privateSectorTariff = tariffs.find(
    ({ start, sector }) =>
      sector.name === SectorType.private && new Date(start) <= new Date(date)
  );
  const multiApartmentSectorTariff = tariffs.find(
    ({ start, sector }) =>
      sector.name === SectorType.multiApartment &&
      new Date(start) <= new Date(date)
  );
  const otherSectorTariff = tariffs.find(
    ({ start, sector }) =>
      sector.name === SectorType.other && new Date(start) <= new Date(date)
  );

  return {
    privateSectorTariff,
    multiApartmentSectorTariff,
    otherSectorTariff,
  };
};

export default getCurrentTariffs;
