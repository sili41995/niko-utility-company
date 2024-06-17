import { InputChangeFunc } from '@/types/types';

export interface IProps {
  name?: string;
  checked: boolean;
  onChange: InputChangeFunc;
  disabled?: boolean;
  settings?: object;
}
