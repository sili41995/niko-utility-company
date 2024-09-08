import { IPeriod } from './period.types';

export interface IBalance {
  id: number;
  amount: number;
  createdAt: Date;
  periodId: number;
  subscriberAccountId: number;
}

export type Balances = IBalance[];

export interface IFullBalance extends IBalance {
  period: IPeriod;
}

export type FullBalances = IFullBalance[];

export interface IGetSubscriberAccountBalanceByPeriod {
  totalPrices: number;
  totalPriceAdjustments: number;
  totalBenefits: number;
  totalPayments: number;
  balance: number;
  isDebt: boolean;
}
