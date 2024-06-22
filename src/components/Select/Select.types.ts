import { FormTypes } from '@/constants';
import { SelectData } from '@/types/data.types';

export interface IProps {
  data: SelectData;
  settings?: object;
  label: string;
  defaultValue?: number;
  width: number;
  formType?: FormTypes;
  horizontal?: boolean;
  offBorderRadius?: boolean;
}

export interface IStyledProps {
  formType?: FormTypes;
  width: number;
  offBorderRadius: boolean;
}

export interface IStyledSelectWrapProps {
  horizontal: boolean;
}
