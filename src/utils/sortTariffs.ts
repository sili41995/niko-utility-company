import { FullTariffs } from '@/types/tariff.types';

const sortTariffs = (tariffs: FullTariffs): FullTariffs =>
  [...tariffs].sort((prevTariff, nextTariff) =>
    String(nextTariff.start).localeCompare(String(prevTariff.start))
  );

export default sortTariffs;
