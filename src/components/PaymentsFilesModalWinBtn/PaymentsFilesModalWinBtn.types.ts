import { InputTypes } from '@/constants';
import { PaymentsFilesCategories } from '@/constants';
import { InputChangeFunc } from '@/types/types';

export interface IProps {
  type: InputTypes;
  checked: boolean;
  value: PaymentsFilesCategories;
  onChange: InputChangeFunc;
  name: PaymentsFilesCategories;
  title: string;
}
