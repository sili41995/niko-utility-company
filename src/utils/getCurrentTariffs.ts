import { SectorTypes } from '@/constants';
import { Tariffs } from '@/types/tariff.types';
import { IGetCurrentTariffs } from '@/types/tariff.types';

const getCurrentTariffs = (tariffs: Tariffs): IGetCurrentTariffs => {
  const date = new Date();

  const privateSectorTariff = tariffs.find(
    ({ start, sector }) =>
      sector === SectorTypes.private && new Date(start) <= new Date(date)
  );
  const multiApartmentSectorTariff = tariffs.find(
    ({ start, sector }) =>
      sector === SectorTypes.multiApartment && new Date(start) <= new Date(date)
  );
  const otherSectorTariff = tariffs.find(
    ({ start, sector }) =>
      sector === SectorTypes.other && new Date(start) <= new Date(date)
  );

  return {
    privateSectorTariff,
    multiApartmentSectorTariff,
    otherSectorTariff,
  };
};

export default getCurrentTariffs;
