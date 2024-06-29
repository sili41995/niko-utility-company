import { Tariffs } from '@/types/data.types';
import { OnBtnClickFunc } from '@/types/types';

export interface IProps {
  tariffs: Tariffs;
  onCloseBtnClick: OnBtnClickFunc;
}
