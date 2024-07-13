import { Messages } from '@/constants';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  SetSubscriberAccountFunc,
  SubscriberAccount,
} from '@/types/subscriberAccount.types';
import validateFindSubscriberAccountForm from '@/validators/validateFindSubscriberAccountForm';
import subscriberAccountsService from '@/services/subscriberAccounts.service';
import { IUseFindSubscriberAccountForm } from '@/types/hooks.types';

const useFindSubscriberAccountForm = (
  setSubscriberAccount: SetSubscriberAccountFunc
): IUseFindSubscriberAccountForm => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SubscriberAccount>();

  useEffect(() => {
    const invalidFields = Object.keys(errors);

    if (invalidFields.length) {
      validateFindSubscriberAccountForm(errors);
    }
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<SubscriberAccount> = async ({
    subscriberAccount,
  }) => {
    try {
      setIsLoading(true);

      const result =
        await subscriberAccountsService.fetchSubscriberAccountByNumber(
          subscriberAccount
        );

      setSubscriberAccount(result);
    } catch (error) {
      if (error instanceof Error) {
        const isNotFoundErr =
          error.message.toLowerCase() === 'subscriber account not Found';
        const errorMessage = isNotFoundErr
          ? Messages.subscriberAccountNotFoundErr
          : error.message;
        setError(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, handleFormSubmit, register, error, isLoading };
};

export default useFindSubscriberAccountForm;
