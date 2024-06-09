import { FormTypes, InputTypes } from '@/constants';
import { ReactNode } from 'react';

export interface IProps {
  settings: object;
  type: InputTypes;
  placeholder?: string;
  icon?: ReactNode;
  formType?: FormTypes;
  autoFocus?: boolean;
  label?: string;
}

export interface IStyledProps {
  formType?: FormTypes;
}
