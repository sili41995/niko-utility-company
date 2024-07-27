import { InputTypes } from '@/constants';
import { SubscriberAccountInfoCategories } from '@/constants';
import { InputChangeFunc } from '@/types/types';

export interface IProps {
  type: InputTypes;
  checked: boolean;
  value: SubscriberAccountInfoCategories;
  onChange: InputChangeFunc;
  name: SubscriberAccountInfoCategories;
  title: string;
}
