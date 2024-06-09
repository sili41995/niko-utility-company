import { IGeneralSettings } from '@/types/data.types';
import validateGeneralSettingsForm from '@/validators/validateGeneralSettingsForm';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const useGeneralSettingsForm = () => {
  //  const isLoading = useGeneralSettingsStore(selectIsLoading);
  //  const setGeneralSettings = useGeneralSettingsStore(selectSetGeneralSettings);
  const isLoading = false;
  const setGeneralSettings = () => {
    console.log('setGeneralSettings');
  };

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<IGeneralSettings>();

  useEffect(() => {
    const invalidFields = Object.keys(errors);
    if (invalidFields.length) {
      validateGeneralSettingsForm(errors);
    }
  }, [isSubmitting, errors]);
};

export default useGeneralSettingsForm;
