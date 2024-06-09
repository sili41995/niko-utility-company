import { Messages } from '@/constants';
import usersService from '@/services/users.service';
import operationWrapper from '@/store/users/operationWrapper';
import { UserData, Users } from '@/types/data.types';
import {
  IAddUserProps,
  IChangeAccessStatusProps,
  IFetchUsersOperationProps,
} from '@/types/usersStore.types';
import { toasts } from '@/utils';
import getUpdatedUsers from '@/utils/getUpdatedUsers';

const fetchUsersOperation = async ({
  set,
}: IFetchUsersOperationProps): Promise<Users | undefined> => {
  const response = await usersService.fetchUsers();
  set({
    items: response,
    isLoaded: true,
  });
  return response;
};

const addUserOperation = async ({
  data,
  set,
  get,
}: IAddUserProps): Promise<UserData | undefined> => {
  const { items: users } = get();

  const response = await usersService.addUser(data);
  set({ items: [...users, response] });
  return response;
};

const changeAccessStatusOperation = async ({
  data,
  set,
  get,
}: IChangeAccessStatusProps): Promise<UserData | undefined> => {
  const { items: users } = get();
  
  const response = await usersService.changeAccessStatus(data);
  const updatedUsers = getUpdatedUsers({
    users,
    updatedUser: response,
  });
  set({ items: updatedUsers });
  toasts.successToast(Messages.dataUpdateSuccess);
  return response;
};

export const fetchUsers = operationWrapper(fetchUsersOperation);
export const addUser = operationWrapper(addUserOperation);
export const changeAccessStatus = operationWrapper(changeAccessStatusOperation);
