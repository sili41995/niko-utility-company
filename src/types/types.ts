import { PagePaths } from '@/constants';
import { MouseEvent } from 'react';

export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

export type Func = () => void;

export interface INavSection {
  path: PagePaths;
  title: string;
  desc: string;
}

export type NavSections = INavSection[];

export interface IPathes {
  [key: string]: string;
  [PagePaths.houses]: string;
  [PagePaths.enterprises]: string;
  [PagePaths.subscribers]: string;
  [PagePaths.counters]: string;
  [PagePaths.accounting]: string;
  [PagePaths.oneOffJobs]: string;
  [PagePaths.materials]: string;
  [PagePaths.documents]: string;
}

export interface IDataItem {
  location: string;
  street: string;
  houseNumber: string;
  floors: null | number;
  exploitation: string;
  houseType: null | string;
  house: string[];
  territory: string[];
  services: string;
  rate: number;
  rateSecondary: number;
}

export type Data = Partial<IDataItem>[];

export type Titles = Array<keyof Partial<IDataItem>>;

export type HouseItem = Pick<
  IDataItem,
  | 'location'
  | 'street'
  | 'houseNumber'
  | 'floors'
  | 'exploitation'
  | 'houseType'
  | 'house'
  | 'territory'
  | 'services'
  | 'rate'
  | 'rateSecondary'
>;

export type Houses = HouseItem[];
