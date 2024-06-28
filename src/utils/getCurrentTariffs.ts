import { SectorTypes } from '@/constants';
import { IGetCurrentTariffs, Tariffs } from '@/types/data.types';

const getCurrentTariffs = (tariffs: Tariffs): IGetCurrentTariffs => {
  const date = new Date();

  const sortedTariffs = [...tariffs].sort((prevTariff, nextTariff) =>
    String(nextTariff.start).localeCompare(String(prevTariff.start))
  );

  const privateSectorTariff = sortedTariffs.find(
    ({ start, sector }) =>
      sector === SectorTypes.private && new Date(start) <= new Date(date)
  );
  const multiApartmentSectorTariff = sortedTariffs.find(
    ({ start, sector }) =>
      sector === SectorTypes.multiApartment && new Date(start) <= new Date(date)
  );
  const otherSectorTariff = sortedTariffs.find(
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
