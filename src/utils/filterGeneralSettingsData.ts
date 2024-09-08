import {
  IGeneralSettingsData,
  IGeneralSettingsFormData,
} from '@/types/generalSettings.types';

const filterGeneralSettingsData = (
  data: IGeneralSettingsFormData
): IGeneralSettingsData => ({
  ...data,
  mfi: Number(data.mfi),
  adsInPayments: data.adsInPayments ? data.adsInPayments : null,
});

export default filterGeneralSettingsData;
