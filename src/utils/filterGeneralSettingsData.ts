import { IGeneralSettings } from '@/types/data.types';

const filterGeneralSettingsData = (data: IGeneralSettings) => {
  const filteredData: { [key: string]: string | number } = {};
  const keys = Object.keys(data);
  keys.forEach((key) => {
    if (data[key]) {
      filteredData[key] = data[key];
    }
  });

  return filteredData;
};

export default filterGeneralSettingsData;
