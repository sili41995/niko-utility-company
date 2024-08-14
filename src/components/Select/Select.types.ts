import { FormTypes, SearchParamsKeys } from '@/constants';
import { SelectData } from '@/types/data.types';
import { SelectChangeFunc } from '@/types/types';

export interface IProps {
  data: SelectData;
  settings?: object;
  label: string;
  defaultValue?: number | string;
  width: number;
  formType?: FormTypes;
  horizontal?: boolean;
  offBorderRadius?: boolean;
  name?: SearchParamsKeys;
  onChange?: SelectChangeFunc;
  capitalize?: boolean;
}

export interface IStyledProps {
  formType?: FormTypes;
  width: number;
  offBorderRadius: boolean;
  capitalize: boolean;
}

export interface IStyledSelectWrapProps {
  horizontal: boolean;
}
