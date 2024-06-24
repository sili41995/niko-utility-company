import { FormTypes, InputTypes, SearchParamsKeys } from '@/constants';
import { InputChangeFunc } from '@/types/types';
import { ReactNode, RefObject } from 'react';

export interface IProps {
  settings?: object;
  type: InputTypes;
  placeholder?: string;
  icon?: ReactNode;
  formType?: FormTypes;
  label?: string;
  defaultValue?: string;
  value?: string;
  accent?: boolean;
  step?: number;
  min?: number;
  horizontal?: boolean;
  width?: number;
  offBorderRadius?: boolean;
  name?: SearchParamsKeys;
  onChange?: InputChangeFunc;
  btn?: ReactNode;
  inputRef?: RefObject<HTMLInputElement>;
}

export interface IStyledInputProps {
  offBorderRadius: boolean;
  formType?: FormTypes;
  width?: number;
}

export interface IStyledLabelProps {
  accent: boolean;
}

export interface IStyledInputWrapProps {
  horizontal: boolean;
}
