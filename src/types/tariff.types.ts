import { SectorType } from './sector.types';

export interface ITariff {
  id: number;
  price: number;
  start: Date;
  sectorId: number;
}

export type Tariffs = ITariff[];

export type NewTariff = Omit<ITariff, 'id'>;

export interface ITariffFormData extends Omit<NewTariff, 'start'> {
  start: string;
}

export type TariffPrice = Pick<ITariff, 'price'>;

export type Start = Pick<ITariff, 'start'>;

export interface IGetUpdatedTariffDataProps {
  data: ITariffFormData;
  sector: SectorType;
}

export interface IGetCurrentTariffs {
  privateSectorTariff: ITariff | undefined;
  multiApartmentSectorTariff: ITariff | undefined;
  otherSectorTariff: ITariff | undefined;
}
