import generalSettingsService from '@/services/generalSettings.service';
import operationWrapper from '@/store/generalSettings/operationWrapper';
import { IGeneralSettings } from '@/types/generalSettings.types';
import {
  IFetchGeneralSettingsOperationProps,
  IUpdateGeneralSettingsOperationProps,
} from '@/types/generalSettingsStore.types';

const fetchGeneralSettingsOperation = async ({
  set,
}: IFetchGeneralSettingsOperationProps): Promise<
  IGeneralSettings | undefined
> => {
  const response = await generalSettingsService.fetchGeneralSettings();
  set({
    settings: response,
    isLoaded: true,
  });
  return response;
};

const updateGeneralSettingsOperation = async ({
  data,
  set,
}: IUpdateGeneralSettingsOperationProps): Promise<
  IGeneralSettings | undefined
> => {
  const response = await generalSettingsService.updateGeneralSettings(data);
  set({
    settings: response,
  });
  return response;
};

export const fetchGeneralSettings = operationWrapper(
  fetchGeneralSettingsOperation
);
export const updateGeneralSettings = operationWrapper(
  updateGeneralSettingsOperation
);
