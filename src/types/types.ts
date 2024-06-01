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

export interface IHouse {
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

export type Houses = IHouse[];

export interface ISubscriber {
  subscriberAccount: string;
  accountType: string;
  location: string;
  street: string;
  houseNumber: number;
  apartmentNumber: number;
  typeOfRoom: string;
  parameters: string[];
  services: string;
  accountBalance: number;
  consumers: number;
}

export type Subscribers = ISubscriber[];
