import { useEffect, useState } from 'react';
import {
  formatDate,
  getAccrualAdjustmentData,
  getSubscriberAccountAddress,
  getSubscriberAccountInfo,
  toasts,
} from '@/utils';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAccrualAdjustmentFormData } from '@/types/data.types';
import { useAccountingStore } from '@/store/store';
import { selectAddAccrualAdjustment } from '@/store/accounting/selectors';
import { validateAccrualsAdjustmentForm } from '@/validators';
import { ISubscriberAccount } from '@/types/subscriberAccount.types';
import { DateFormats, Messages } from '@/constants';
import { IUseAccrualsAdjustmentForm } from '@/types/hooks.types';

const useAccrualsAdjustmentForm = (
  subscriberAccount: ISubscriberAccount
): IUseAccrualsAdjustmentForm => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<IAccrualAdjustmentFormData>();
  const addAccrualAdjustment = useAccountingStore(selectAddAccrualAdjustment);

  const address = getSubscriberAccountAddress(subscriberAccount);
  const subscriberAccountInfo = getSubscriberAccountInfo(subscriberAccount);

  const currentDate = formatDate({
    date: new Date(),
    dateFormat: DateFormats.validDate,
  });

  useEffect(() => {
    const invalidFields = Object.keys(errors);

    if (invalidFields.length) {
      validateAccrualsAdjustmentForm(errors);
    }
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<IAccrualAdjustmentFormData> = async (
    data
  ) => {
    const accrualAdjustmentData = getAccrualAdjustmentData({
      data,
      id: subscriberAccount.id,
    });

    try {
      setIsLoading(true);
      await addAccrualAdjustment(accrualAdjustmentData);
      toasts.successToast(Messages.addAccrualAdjustmentSuccess);
    } catch (error) {
      if (error instanceof Error) {
        toasts.errorToast(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    address,
    subscriberAccountInfo,
    handleSubmit,
    handleFormSubmit,
    register,
    currentDate,
    isLoading,
  };
};

export default useAccrualsAdjustmentForm;
