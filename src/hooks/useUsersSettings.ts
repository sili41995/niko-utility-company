import { useUsersStore } from '@/store/store';
import {
  selectError,
  selectFetchUsers,
  selectIsLoaded,
  selectIsLoading,
} from '@/store/users/selectors';
import { IUseUsersSettings } from '@/types/hooks.types';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { useEffect, useState } from 'react';

const useUsersSettings = (): IUseUsersSettings => {
  const [showAddUserForm, setShowAddUserForm] = useState<boolean>(false);
  const fetchUsers = useUsersStore(selectFetchUsers);
  const isLoading = useUsersStore(selectIsLoading);
  const isLoaded = useUsersStore(selectIsLoaded);
  const isLoadingData = !isLoaded && isLoading;
  const error = useUsersStore(selectError);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const toggleShowAddUserForm = (): void => {
    setShowAddUserForm((prevState) => !prevState);
  };

  const onAddBntClick = (e: BtnClickEvent): void => {
    makeBlur(e.currentTarget);
    toggleShowAddUserForm();
  };

  return {
    isLoadingData,
    onAddBntClick,
    showAddUserForm,
    toggleShowAddUserForm,
    error,
  };
};

export default useUsersSettings;
