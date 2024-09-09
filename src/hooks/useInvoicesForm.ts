import { saveFileToPdf, toasts } from '@/utils';
import accountingService from '@/services/accounting.service';
import { Messages } from '@/constants';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { IUseInvoicesForm } from '@/types/hooks.types';
import { SubmitHandler, useForm } from 'react-hook-form';
import useHousesLocation from './useHousesLocation';
import { IHousesLocationData } from '@/types/types';

const useInvoicesForm = (): IUseInvoicesForm => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { register, handleSubmit, watch } = useForm<IHousesLocationData>();

  const streetId = watch('streetId');
  const { allHousesData, streetsData } = useHousesLocation(streetId);

  const handleFormSubmit: SubmitHandler<IHousesLocationData> = async (data) => {
    setIsLoading(true);

    try {
      const result = await accountingService.fetchInvoices(data);
      saveFileToPdf({ data: result, fileName: 'invoices.pdf' });
      toasts.successToast(Messages.fetchInvoicesSuccess);
    } catch (error) {
      if (error instanceof AxiosError) {
        toasts.errorToast(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    register,
    handleSubmit,
    handleFormSubmit,
    houses: allHousesData,
    streets: streetsData,
  };
};

export default useInvoicesForm;
