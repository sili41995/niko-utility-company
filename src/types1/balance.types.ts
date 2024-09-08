export interface IBalance {
  id: number;
  amount: number;
  createdAt: Date;
  periodId: number;
  period: IPeriod;
  subscriberAccountId: number;
}

export type Balances = IBalance[];
