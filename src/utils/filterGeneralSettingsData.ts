import { IGeneralSettings } from '@/types/data.types';

const filterGeneralSettingsData = (
  data: IGeneralSettings
): IGeneralSettings => {
  const filteredData = { ...data };
  const keys = Object.keys(data);
  keys.forEach((key) => {
    if (data[key]) {
      filteredData[key] = data[key];
    }
  });

  return filteredData;
};

export default filterGeneralSettingsData;
