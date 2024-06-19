import { FormTypes } from '@/constants';
import { SelectData } from '@/types/data.types';

export interface IProps {
  data: SelectData;
  settings: object;
  label: string;
  defaultValue?: number;
  width: number;
  formType?: FormTypes;
}

export interface IStyledProps {
  formType?: FormTypes;
  width: number;
}
