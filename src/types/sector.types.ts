export const enum SectorType {
  multiApartment = 'multiApartment',
  private = 'private',
  other = 'other',
}

export interface ISector {
  id: number;
  name: SectorType;
  label: string;
}

export type Sectors = ISector[];
