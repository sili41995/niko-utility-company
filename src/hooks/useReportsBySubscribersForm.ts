import {
  IReportsBySubscribersFormData,
  ISelectData,
  SelectData,
} from '@/types/data.types';
import { IUseReportsBySubscribersForm } from '@/types/hooks.types';
import {
  getPeriodsSelectData,
  getReportsBySubscribersData,
  saveFileToPdf,
  toasts,
} from '@/utils';
import validateReportsBySubscribersForm from '@/validators/validateReportsBySubscribersForm';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useHousesLocation from './useHousesLocation';
import { usePeriodsStore } from '@/store/store';
import { selectPeriods } from '@/store/periods/selectors';
import accountingService from '@/services/accounting.service';
import { Messages } from '@/constants';

const useReportsBySubscribersForm = (): IUseReportsBySubscribersForm => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<IReportsBySubscribersFormData>();
  const streetId = watch('streetId');
  const { housesData, streetsData } = useHousesLocation(streetId);
  const periods = usePeriodsStore(selectPeriods);

  const allHouses: ISelectData = { title: 'Всі будинки', value: '' };
  const housesSelectData: SelectData = streetId
    ? [allHouses, ...housesData]
    : [allHouses];
  const streetsSelectData: SelectData = [
    { title: 'Всі вулиці', value: '' },
    ...streetsData,
  ];
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
