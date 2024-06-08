import { Messages } from '@/constants';
import { NewUser } from '@/types/data';
import { IUseAddUserForm } from '@/types/hooks';
import { toasts } from '@/utils';
import { validateAddUserForm } from '@/validators';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const useAddUserForm = (): IUseAddUserForm => {
  // const isLoading = useAuthStore(selectIsLoading);
  const isLoading = false;
  //   const addUser = useAuthStore(selectAddUser);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<NewUser>();

  useEffect(() => {
    const invalidFields = Object.keys(errors);
    if (invalidFields.length) {
      validateAddUserForm(errors);
    }
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<NewUser> = async (data) => {
    console.log(data);
    try {
      // await signIn(data);
      toasts.successToast(Messages.userAddSuccess);
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
    isLoading,
  };
};

export default useAddUserForm;
