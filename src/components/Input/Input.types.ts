import { FormTypes, InputTypes } from '@/constants';
import { ReactNode } from 'react';

export interface IProps {
  settings?: object;
  type: InputTypes;
  placeholder?: string;
  icon?: ReactNode;
  formType?: FormTypes;
  label?: string;
  defaultValue?: string;
  accent?: boolean;
  step?: number;
  min?: number;
  horizontal?: boolean;
  width?: number;
}

export interface IStyledInputProps {
  formType?: FormTypes;
  width?: number;
}

export interface IStyledLabelProps {
  accent: boolean;
}

export interface IStyledInputWrapProps {
  horizontal: boolean;
}
