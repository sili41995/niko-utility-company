import { FullTariffs } from '@/types/tariff.types';
import { OnBtnClickFunc } from '@/types/types';

export interface IProps {
  tariffs: FullTariffs;
  onCloseBtnClick: OnBtnClickFunc;
}
