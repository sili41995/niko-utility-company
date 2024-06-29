import { Tariffs } from '@/types/data.types';

const sortTariffs = (tariffs: Tariffs): Tariffs =>
  [...tariffs].sort((prevTariff, nextTariff) =>
    String(nextTariff.start).localeCompare(String(prevTariff.start))
  );

export default sortTariffs;
