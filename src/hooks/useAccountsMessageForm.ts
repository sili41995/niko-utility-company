import { saveFileToPdf, toasts } from '@/utils';
import accountingService from '@/services/accounting.service';
import { Messages } from '@/constants';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { IUseAccountsMessageForm } from '@/types/hooks.types';
import { IHousesLocationData } from '@/types/data.types';
import { SubmitHandler, useForm } from 'react-hook-form';
import useHousesLocation from './useHousesLocation';

const useAccountsMessageForm = (): IUseAccountsMessageForm => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { register, handleSubmit, watch } = useForm<IHousesLocationData>();

  const streetId = watch('streetId');
  const { allHousesData, streetsData, streetDefaultValue } =
    useHousesLocation(streetId);

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
    streetDefaultValue,
  };
};

export default useAccountsMessageForm;
