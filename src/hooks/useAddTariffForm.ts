import { useEffect } from 'react';
import { useTariffsStore } from '@/store/store';
import { selectAdd, selectIsLoading } from '@/store/tariffs/selectors';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ITariffFormData } from '@/types/tariff.types';
import { getTariffUnits, getUpdatedTariffData, toasts } from '@/utils';
import validateAddTariffForm from '@/validators/validateAddTariffForm';
import { Messages } from '@/constants';
import { SectorType } from '@/types/sector.types';

const useAddTariffForm = (sector: SectorType) => {
  const tariffUnits = getTariffUnits(sector);
  const tariffLabel = `Тариф (${tariffUnits}):`;
  const isLoading = useTariffsStore(selectIsLoading);
  const addTariff = useTariffsStore(selectAdd);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<ITariffFormData>();

  useEffect(() => {
    const invalidFields = Object.keys(errors);
    if (invalidFields.length) {
      validateAddTariffForm(errors);
    }
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<ITariffFormData> = async (data) => {
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
