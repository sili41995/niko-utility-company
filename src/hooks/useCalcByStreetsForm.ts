import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ITimePeriod } from '@/types/data.types';
import validateCalcByStreetsForm from '@/validators/validateCalcByStreetsForm';
import { IUseCalcByStreetsForm } from '@/types/hooks.types';
import accountingService from '@/services/accounting.service';
import { saveFileToPdf, toasts } from '@/utils';
import { Messages } from '@/constants';
import { AxiosError } from 'axios';

const useCalcByStreetsForm = (): IUseCalcByStreetsForm => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ITimePeriod>();

  useEffect(() => {
    const invalidFields = Object.keys(errors);

    if (invalidFields.length) {
      validateCalcByStreetsForm(errors);
    }
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<ITimePeriod> = async (data) => {
    setIsLoading(true);

    try {
      const result = await accountingService.fetchReportsByStreets(data);
      saveFileToPdf({ data: result, fileName: 'reports-streets.pdf' });
      toasts.successToast(Messages.fetchReportsSuccess);
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message;
        const isNotFoundErr = message.toLowerCase() === 'file was not found';
        const errorMessage = isNotFoundErr ? Messages.fileNotFoundErr : message;
        toasts.errorToast(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, register, handleFormSubmit, isLoading };
};

export default useCalcByStreetsForm;
