import { InputChangeFunc } from '@/types/types';

export interface IProps {
  isBalancesCategory: boolean;
  isPricesCategory: boolean;
  isPriceAdjustmentsCategory: boolean;
  isPaymentsCategory: boolean;
  isEditingCategory: boolean;
  onChange: InputChangeFunc;
}
