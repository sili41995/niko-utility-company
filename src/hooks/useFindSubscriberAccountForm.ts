import { Messages } from '@/constants';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  SetSubscriberAccountFunc,
  SubscriberAccountNumber,
} from '@/types/subscriberAccount.types';
import validateFindSubscriberAccountForm from '@/validators/validateFindSubscriberAccountForm';
import subscriberAccountsService from '@/services/subscriberAccounts.service';
import { IUseFindSubscriberAccountForm } from '@/types/hooks.types';
import { AxiosError } from 'axios';
import { toasts } from '@/utils';

const useFindSubscriberAccountForm = (
  setSubscriberAccount: SetSubscriberAccountFunc
): IUseFindSubscriberAccountForm => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SubscriberAccountNumber>();

  useEffect(() => {
    const invalidFields = Object.keys(errors);

    if (invalidFields.length) {
      validateFindSubscriberAccountForm(errors);
    }
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<SubscriberAccountNumber> = async ({
    number,
  }) => {
    try {
      setIsLoading(true);

      const result =
        await subscriberAccountsService.fetchSubscriberAccountByNumber(number);

      setSubscriberAccount(result);
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message;
        const isNotFoundErr =
          message.toLowerCase() === 'subscriber account was not found';
        const errorMessage = isNotFoundErr
          ? Messages.subscriberAccountNotFoundErr
          : message;
        toasts.errorToast(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, handleFormSubmit, register, isLoading };
};

export default useFindSubscriberAccountForm;
