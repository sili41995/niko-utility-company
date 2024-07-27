import { InputChangeFunc } from '@/types/types';

export interface IProps {
  isBalanceCategory: boolean;
  isPricesCategory: boolean;
  isPriceAdjustmentsCategory: boolean;
  isPaymentsCategory: boolean;
  isEditingCategory: boolean;
  onChange: InputChangeFunc;
}
