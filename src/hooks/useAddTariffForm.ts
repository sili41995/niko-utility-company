import { useEffect } from 'react';
import { useTariffsStore } from '@/store/store';
import { selectAddTariff, selectIsLoading } from '@/store/tariffs/selectors';
import { SubmitHandler, useForm } from 'react-hook-form';
import { INewTariffFormData } from '@/types/data.types';
import { getTariffUnits, getUpdatedTariffData, toasts } from '@/utils';
import validateAddTariffForm from '@/validators/validateAddTariffForm';
import { Messages, SectorTypes } from '@/constants';

const useAddTariffForm = (sector: SectorTypes) => {
  const tariffUnits = getTariffUnits(sector);
  const tariffLabel = `Тариф (${tariffUnits}):`;
  const isLoading = useTariffsStore(selectIsLoading);
  const addTariff = useTariffsStore(selectAddTariff);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<INewTariffFormData>();

  useEffect(() => {
    const invalidFields = Object.keys(errors);
    if (invalidFields.length) {
      validateAddTariffForm(errors);
    }
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<INewTariffFormData> = async (data) => {
    const updatedData = getUpdatedTariffData({ data, sector });

    try {
      await addTariff(updatedData);
      toasts.successToast(Messages.tariffAddSuccess);
    } catch (error) {
      if (error instanceof Error) {
        toasts.errorToast(error.message);
      }
    }
  };

  return {
    tariffLabel,
    isLoading,
    register,
    handleSubmit,
    handleFormSubmit,
  };
};

export default useAddTariffForm;
