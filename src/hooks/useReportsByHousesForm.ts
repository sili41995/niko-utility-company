import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ITimePeriod } from '@/types/data.types';
import { validateReportsByStreetsForm } from '@/validators';
import { IUseReportsByHousesForm } from '@/types/hooks.types';
import accountingService from '@/services/accounting.service';
import { saveFileToPdf, toasts } from '@/utils';
import { Messages } from '@/constants';
import { AxiosError } from 'axios';
import usePeriodsRange from './usePeriodsRange';

const useReportsByHousesForm = (): IUseReportsByHousesForm => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ITimePeriod>();
  const { maxMonthDate, nimMonthDate } = usePeriodsRange();

  useEffect(() => {
    const invalidFields = Object.keys(errors);

    if (invalidFields.length) {
      validateReportsByHousesForm(errors);
    }
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<ITimePeriod> = async (data) => {
    setIsLoading(true);

    try {
      const result = await accountingService.fetchReportsByHouses(data);
      saveFileToPdf({ data: result, fileName: 'reports-houses.pdf' });
      toasts.successToast(Messages.fetchReportsSuccess);
    } catch (error) {
      if (error instanceof AxiosError) {
        toasts.errorToast(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleSubmit,
    register,
    handleFormSubmit,
    isLoading,
    maxMonthDate,
    nimMonthDate,
  };
};

export default useReportsByHousesForm;
