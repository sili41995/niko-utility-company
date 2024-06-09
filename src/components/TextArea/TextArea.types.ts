import { FormTypes } from '@/constants';

export interface IProps {
  settings: object;
  label: string;
  formType?: FormTypes;
}

export interface IStyledProps {
  formType?: FormTypes;
}
