import {
  formatDate,
  getPaymentSourcesSelectData,
  toasts,
  getNewPaymentData,
} from '@/utils';
import { SubmitHandler, useForm } from 'react-hook-form';
import { DateFormats, GeneralParams, Messages } from '@/constants';
import { INewPaymentFormData } from '@/types/data.types';
import { validatePaymentForm } from '@/validators';
import { usePaymentsStore, usePeriodsStore } from '@/store/store';
import {
  selectAddPayment,
  selectFetchPayments,
  selectIsLoading,
} from '@/store/payments/selectors';
import { useFilterSearchParams } from '@/hooks';
import { ISubscriberAccount } from '@/types/subscriberAccount.types';
import { useEffect } from 'react';
import { IUseAddPaymentForm } from '@/types/hooks.types';
import { selectAddLocalPayment } from '@/store/periods/selectors';

const useAddPaymentForm = (
  subscriberAccount: ISubscriberAccount | null
): IUseAddPaymentForm => {
  const isLoading = usePaymentsStore(selectIsLoading);
  const addPayment = usePaymentsStore(selectAddPayment);
  const addLocalPayment = usePeriodsStore(selectAddLocalPayment);
  const fetchPayments = usePaymentsStore(selectFetchPayments);
  const { page } = useFilterSearchParams();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<INewPaymentFormData>();
  const paymentSources = getPaymentSourcesSelectData();
  const currentDate = formatDate({
    date: new Date(),
    dateFormat: DateFormats.validDate,
  });
  const disabledSubmitBtn = Boolean(!subscriberAccount);

  useEffect(() => {
    const invalidFields = Object.keys(errors);

    if (invalidFields.length) {
      validatePaymentForm(errors);
    }
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<INewPaymentFormData> = async (data) => {
    if (!subscriberAccount) {
      return;
    }

    const newPaymentData = getNewPaymentData({
      data,
      id: subscriberAccount.id,
    });

    try {
      const result = await addPayment(newPaymentData);
      result && addLocalPayment(result);
      fetchPayments({
        page,
        limit: Number(GeneralParams.paymentsRecordLimit),
      });
      toasts.successToast(Messages.paymentAddSuccess);
    } catch (error) {
      if (error instanceof Error) {
        toasts.errorToast(error.message);
      }
    }
  };

  return {
    handleSubmit,
    handleFormSubmit,
    register,
    paymentSources,
    currentDate,
    isLoading,
    disabledSubmitBtn,
  };
};

export default useAddPaymentForm;
