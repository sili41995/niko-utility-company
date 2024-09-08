import { useEffect, useState } from 'react';
import { formatDate, getPriceAdjustmentData, toasts } from '@/utils';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IPriceAdjustmentFormData } from '@/types/priceAdjustment.types';
import { useAccountingStore } from '@/store/store';
import { selectAddPriceAdjustment } from '@/store/accounting/selectors';
import { validatePriceAdjustmentForm } from '@/validators';
import { ISubscriberAccount } from '@/types/subscriberAccount.types';
import { DateFormats, Messages } from '@/constants';
import { IUsePriceAdjustmentForm } from '@/types/hooks.types';

const usePriceAdjustmentForm = (
  subscriberAccount: ISubscriberAccount
): IUsePriceAdjustmentForm => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<IPriceAdjustmentFormData>();
  const addPriceAdjustment = useAccountingStore(selectAddPriceAdjustment);

  const currentDate = formatDate({
    date: new Date(),
    dateFormat: DateFormats.validDate,
  });

  useEffect(() => {
    const invalidFields = Object.keys(errors);

    if (invalidFields.length) {
      validatePriceAdjustmentForm(errors);
    }
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<IPriceAdjustmentFormData> = async (
    data
  ) => {
    const priceAdjustmentData = getPriceAdjustmentData({
      data,
      id: subscriberAccount.id,
    });

    try {
      setIsLoading(true);
      await addPriceAdjustment(priceAdjustmentData);
      toasts.successToast(Messages.addPriceAdjustmentSuccess);
    } catch (error) {
      if (error instanceof Error) {
        toasts.errorToast(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleSubmit,
    handleFormSubmit,
    register,
    currentDate,
    isLoading,
  };
};

export default usePriceAdjustmentForm;
