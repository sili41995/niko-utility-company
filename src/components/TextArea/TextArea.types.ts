import { FormTypes } from '@/constants';

export interface IProps {
  settings: object;
  label: string;
  formType?: FormTypes;
  defaultValue?: string;
}

export interface IStyledProps {
  formType?: FormTypes;
}
