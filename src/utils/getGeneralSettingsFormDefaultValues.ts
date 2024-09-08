import { IGetGeneralSettingsFormDefaultValues } from '@/types/generalSettings.types';
import { ISettings } from '@/types/generalSettingsStore.types';

const getGeneralSettingsFormDefaultValues = (
  generalSettings: ISettings
): IGetGeneralSettingsFormDefaultValues => {
  const { adsInPayments, currentAccount, helpPhone, mfi } = generalSettings;
  const currentAccountDefaultValue = currentAccount ?? '';
  const mfiDefaultValue = mfi ? String(mfi) : '';
  const helpPhoneDefaultValue = helpPhone ?? '';
  const adsInPaymentsDefaultValue = adsInPayments ?? '';

  return {
    currentAccount: currentAccountDefaultValue,
    mfi: mfiDefaultValue,
    helpPhone: helpPhoneDefaultValue,
    adsInPayments: adsInPaymentsDefaultValue,
  };
};

export default getGeneralSettingsFormDefaultValues;
