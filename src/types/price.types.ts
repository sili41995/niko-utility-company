import { IPeriod } from './period.types';
import { ITariff } from './tariff.types';

export interface IPrice {
  id: number;
  date: Date;
  residents: number;
  tariffId: number;
  subscriberAccountId: number;
  periodId: number;
}

export type Prices = IPrice[];

export interface IFullPrice extends IPrice {
  tariff: ITariff;
  period: IPeriod;
}

export type FullPrices = IFullPrice[];
