import { Messages } from '@/constants';
import { Credentials } from '@/types/data.types';
import { IUseSignInForm } from '@/types/hooks.types';
import { toasts } from '@/utils';
import { validateSignInForm } from '@/validators';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const useSignInForm = (): IUseSignInForm => {
  // const isLoading = useAuthStore(selectIsLoading);
  const isLoading = false;
  //   const signIn = useAuthStore(selectSignIn);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<Credentials>();

  useEffect(() => {
    const invalidFields = Object.keys(errors);
    if (invalidFields.length) {
      validateSignInForm(errors);
    }
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<Credentials> = async (data) => {
    console.log(data);
    try {
      // await signIn(data);
      toasts.successToast(Messages.signInSuccess);
    } catch (error) {
      if (error instanceof Error) {
        toasts.errorToast(error.message);
      }
    }
  };

  return {
    handleFormSubmit,
    handleSubmit,
    register,
    // signUpPath,
    isLoading,
  };
};

export default useSignInForm;
