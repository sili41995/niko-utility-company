import {
  IBalance,
  Payments,
  PriceAdjustments,
  Prices,
} from '@/types/data.types';

export interface IProps {
  balance: IBalance;
  prices: Prices;
  priceAdjustments: PriceAdjustments;
  payments: Payments;
}

export interface IStyledTableDataProps {
  center?: boolean;
  capitalize?: boolean;
}
