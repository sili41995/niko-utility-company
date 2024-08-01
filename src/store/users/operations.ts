import usersService from '@/services/users.service';
import operationWrapper from '@/store/users/operationWrapper';
import { UserData, Users } from '@/types/data.types';
import {
  IAddUserProps,
  IFetchUsersOperationProps,
} from '@/types/usersStore.types';

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

export const fetchUsers = operationWrapper(fetchUsersOperation);
export const addUser = operationWrapper(addUserOperation);
