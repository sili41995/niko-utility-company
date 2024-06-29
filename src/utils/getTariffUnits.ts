import { SectorTypes } from '@/constants';

const getTariffUnits = (sector: SectorTypes) =>
  sector === SectorTypes.other ? 'грн./м3' : 'грн./мешк.';

export default getTariffUnits;
