import { InputChangeFunc } from '@/types/types';

export interface IProps {
  isSettlementsCategory: boolean;
  isServiceListCategory: boolean;
  isCurrentServicesCategory: boolean;
  isUsersCategory: boolean;
  isGeneralSettingsCategory: boolean;
  onChange: InputChangeFunc;
}
