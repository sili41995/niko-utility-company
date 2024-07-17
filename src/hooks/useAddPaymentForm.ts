import {
  formatDate,
  getPaymentSourcesSelectData,
  getSubscriberAccountAddress,
  getSubscriberAccountInfo,
  toasts,
} from '@/utils';
import { SubmitHandler, useForm } from 'react-hook-form';
import { DateFormats, GeneralParams, Messages } from '@/constants';
import { INewPaymentFormData } from '@/types/data.types';
import { validatePaymentForm } from '@/validators';
import getNewPaymentData from '@/utils/getNewPaymentData';
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
import { selectFetchPeriods } from '@/store/periods/selectors';

const useAddPaymentForm = (
  subscriberAccount: ISubscriberAccount
): IUseAddPaymentForm => {
  const isLoading = usePaymentsStore(selectIsLoading);
  const addPayment = usePaymentsStore(selectAddPayment);
  const fetchPayments = usePaymentsStore(selectFetchPayments);
  const fetchPeriods = usePeriodsStore(selectFetchPeriods);
  const { page } = useFilterSearchParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<INewPaymentFormData>();
  const address = getSubscriberAccountAddress(subscriberAccount);
  const subscriberAccountInfo = getSubscriberAccountInfo(subscriberAccount);
  const paymentSources = getPaymentSourcesSelectData();
  const currentDate = formatDate({
    date: new Date(),
    dateFormat: DateFormats.validDate,
  });

  useEffect(() => {
    const invalidFields = Object.keys(errors);

    if (invalidFields.length) {
      validatePaymentForm(errors);
    }
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<INewPaymentFormData> = async (data) => {
    const newPaymentData = getNewPaymentData({
      data,
      id: subscriberAccount.id,
    });

    try {
      await addPayment(newPaymentData);
      fetchPeriods();
      fetchPayments({
        page,
        limit: Number(GeneralParams.paymentsRecordLimit),
      });
      toasts.successToast(Messages.paymentAddSuccess);
      reset();
    } catch (error) {
      if (error instanceof Error) {
        toasts.errorToast(error.message);
      }
    }
  };

  return {
    address,
    subscriberAccountInfo,
    handleSubmit,
    handleFormSubmit,
    register,
    paymentSources,
    currentDate,
    isLoading,
  };
};

export default useAddPaymentForm;
