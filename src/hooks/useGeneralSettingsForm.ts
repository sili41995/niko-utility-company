import { Messages } from '@/constants';
import {
  selectGeneralSettings,
  selectIsLoading,
  selectUpdateGeneralSettings,
} from '@/store/generalSettings/selectors';
import { useGeneralSettingsStore } from '@/store/store';
import { IGeneralSettingsFormData } from '@/types/generalSettings.types';
import { IUseGeneralSettingsForm } from '@/types/hooks.types';
import {
  filterGeneralSettingsData,
  getGeneralSettingsFormDefaultValues,
  toasts,
} from '@/utils';
import { validateGeneralSettingsForm } from '@/validators';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const useGeneralSettingsForm = (id: number): IUseGeneralSettingsForm => {
  const generalSettings = useGeneralSettingsStore(selectGeneralSettings);
  const isLoading = useGeneralSettingsStore(selectIsLoading);
  const updateGeneralSettings = useGeneralSettingsStore(
    selectUpdateGeneralSettings
  );
  const { adsInPayments, currentAccount, helpPhone, mfi } =
    getGeneralSettingsFormDefaultValues(generalSettings);

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<IGeneralSettingsFormData>();

  useEffect(() => {
    const invalidFields = Object.keys(errors);
    if (invalidFields.length) {
      validateGeneralSettingsForm(errors);
    }
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<IGeneralSettingsFormData> = async (
    data
  ) => {
    try {
      const filteredData = filterGeneralSettingsData(data);
      await updateGeneralSettings({ id, data: filteredData });
      toasts.successToast(Messages.updateGeneralSettingsSuccess);
    } catch (error) {
      if (error instanceof Error) {
        toasts.errorToast(error.message);
      }
    }
  };

  return {
    handleSubmit,
    register,
    handleFormSubmit,
    isLoading,
    adsInPayments: adsInPayments ? adsInPayments : '',
    mfi: String(mfi),
    currentAccount,
    helpPhone,
  };
};

export default useGeneralSettingsForm;
