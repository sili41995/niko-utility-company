import { InputChangeFunc } from '@/types/types';

export interface IProps {
  isBalanceCategory: boolean;
  isAccrualsCategory: boolean;
  isAdjustmentCategory: boolean;
  isPaymentsCategory: boolean;
  isEditingCategory: boolean;
  onChange: InputChangeFunc;
}
