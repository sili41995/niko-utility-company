import { FC } from 'react';
import SettingsModalWinBtn from '../SettingsModalWinBtn';
import { InputTypes, SettingsCategories } from '@/constants';
import { IProps } from './SettingsModalWinControls.types';

const SettingsModalWinControls: FC<IProps> = ({
  isSettlementsCategory,
  isServiceListCategory,
  isCurrentServicesCategory,
  isUsersCategory,
  isGeneralSettingsCategory,
  onChange,
}) => {
  return (
    <form>
      <SettingsModalWinBtn
        checked={isSettlementsCategory}
        name={SettingsCategories.name}
        onChange={onChange}
        type={InputTypes.radio}
        value={SettingsCategories.settlements}
      />
      <SettingsModalWinBtn
        checked={isServiceListCategory}
        name={SettingsCategories.name}
        onChange={onChange}
        type={InputTypes.radio}
        value={SettingsCategories.serviceList}
      />
      <SettingsModalWinBtn
        checked={isCurrentServicesCategory}
        name={SettingsCategories.name}
        onChange={onChange}
        type={InputTypes.radio}
        value={SettingsCategories.currentServices}
      />
      <SettingsModalWinBtn
        checked={isUsersCategory}
        name={SettingsCategories.name}
        onChange={onChange}
        type={InputTypes.radio}
        value={SettingsCategories.users}
      />
      <SettingsModalWinBtn
        checked={isGeneralSettingsCategory}
        name={SettingsCategories.name}
        onChange={onChange}
        type={InputTypes.radio}
        value={SettingsCategories.generalSettings}
      />
    </form>
  );
};

export default SettingsModalWinControls;
