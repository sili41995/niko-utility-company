import { InputTypes } from '@/constants';
import { SettingsCategories } from '@/constants';
import { InputChangeFunc } from '@/types/types';

export interface IProps {
  type: InputTypes;
  checked: boolean;
  value: SettingsCategories;
  onChange: InputChangeFunc;
  name: SettingsCategories;
  title: string;
}
