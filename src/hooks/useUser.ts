import { UserData } from '@/types/data.types';
import { useAuthStore, useUsersStore } from '@/store/store';
import { selectChangeAccessStatus } from '@/store/users/selectors';
import { InputChangeEvent } from '@/types/types';
import { selectUser } from '@/store/auth/selectors';
import { IUseUser } from '@/types/hooks.types';

const useUser = (user: UserData): IUseUser => {
  const {
    id,
    name,
    login,
    fullAccess,
    houses,
    subscribers,
    accounting,
    counters,
    documents,
    oneOffJobs,
    settings,
  } = user;
  const currentUser = useAuthStore(selectUser);
  const changeAccessStatus = useUsersStore(selectChangeAccessStatus);
  const isCurrentUser = currentUser.id === id && !user.fullAccess;

  const onInputChange = (e: InputChangeEvent): void => {
    const { checked, name } = e.currentTarget;

    changeAccessStatus({
      data: { [name]: checked },
      id,
      accessKey: name,
    });
  };

  return {
    name,
    login,
    fullAccess,
    isCurrentUser,
    houses,
    subscribers,
    accounting,
    documents,
    counters,
    oneOffJobs,
    settings,
    onInputChange,
  };
};

export default useUser;
