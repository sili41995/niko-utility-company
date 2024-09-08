import { SectorType } from '@/types/sector.types';

const getTariffUnits = (sector: SectorType) =>
  sector === SectorType.other ? 'грн./м3' : 'грн./мешк.';

export default getTariffUnits;
