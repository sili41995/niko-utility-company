export interface IPrice {
  id: number;
  date: Date;
  residents: number;
  tariffId: number;
  subscriberAccountId: number;
  periodId: number;
}

export type Prices = IPrice[];
