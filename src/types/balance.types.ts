export interface IBalance {
  id: number;
  amount: number;
  createdAt: Date;
  periodId: number;
  subscriberAccountId: number;
}

export type Balances = IBalance[];
