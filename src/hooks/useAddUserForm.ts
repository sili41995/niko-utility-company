import { Messages } from '@/constants';
import { useUsersStore } from '@/store/store';
import { selectAddUser, selectIsLoading } from '@/store/users/selectors';
import { NewUser } from '@/types/user.types';
import { IUseAddUserForm } from '@/types/hooks.types';
import { toasts } from '@/utils';
import { validateAddUserForm } from '@/validators';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const useAddUserForm = (): IUseAddUserForm => {
  const isLoading = useUsersStore(selectIsLoading);
  const addUser = useUsersStore(selectAddUser);
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
    try {
      await addUser(data);
      toasts.successToast(Messages.addUserSuccess);
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
