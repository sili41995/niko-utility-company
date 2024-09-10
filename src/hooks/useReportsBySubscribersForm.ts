import { IReportsBySubscribersFormData } from '@/types/report.types';
import { IUseReportsBySubscribersForm } from '@/types/hooks.types';
import {
  getPeriodsSelectData,
  getReportsBySubscribersData,
  saveFileToPdf,
  toasts,
} from '@/utils';
import { validateReportsBySubscribersForm } from '@/validators';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { usePeriodsStore } from '@/store/store';
import { selectPeriods } from '@/store/periods/selectors';
import accountingService from '@/services/accounting.service';
import { Messages } from '@/constants';
import useHousesLocationSelectData from './useHousesLocationSelectData';

const useReportsBySubscribersForm = (): IUseReportsBySubscribersForm => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<IReportsBySubscribersFormData>();

  const streetId = watch('streetId');
  const { housesSelectData, streetsSelectData } =
    useHousesLocationSelectData(streetId);

  const periods = usePeriodsStore(selectPeriods);
  const periodsSelectData = getPeriodsSelectData(periods);

  useEffect(() => {
    const invalidFields = Object.keys(errors);

    if (invalidFields.length) {
      validateReportsBySubscribersForm(errors);
    }
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<IReportsBySubscribersFormData> = async (
    data
  ) => {
    const updatedData = getReportsBySubscribersData(data);

    setIsLoading(true);

    try {
      const result = await accountingService.fetchReportsBySubscribers(
        updatedData
      );
      saveFileToPdf({ data: result, fileName: 'reports-subscribers.pdf' });
      toasts.successToast(Messages.getReportSuccess);
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
    houses: housesSelectData,
    streets: streetsSelectData,
    periods: periodsSelectData,
  };
};

export default useReportsBySubscribersForm;
