import { SelectData } from '@/types/data.types';

export interface IProps {
  data: SelectData;
  settings: object;
  label: string;
  defaultValue?:number
}
