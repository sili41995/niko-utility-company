import { ISector, SectorType } from './sector.types';

export interface ITariff {
  id: number;
  price: number;
  start: Date;
  sectorId: number;
}

export type Tariffs = ITariff[];

export interface IFullTariff extends ITariff {
  sector: ISector;
}

export type FullTariffs = IFullTariff[];

export interface INewTariff extends Pick<ITariff, 'price' | 'start'> {
  name: SectorType;
}

export interface ITariffFormData extends Omit<INewTariff, 'start'> {
  start: string;
}

export interface IGetUpdatedTariffDataProps {
  data: ITariffFormData;
  sector: SectorType;
}

export interface IGetCurrentTariffs {
  privateSectorTariff: IFullTariff | undefined;
  multiApartmentSectorTariff: IFullTariff | undefined;
  otherSectorTariff: IFullTariff | undefined;
}

export interface IFilterTariffsBySectorProps {
  tariffs: FullTariffs;
  sector: SectorType;
}
