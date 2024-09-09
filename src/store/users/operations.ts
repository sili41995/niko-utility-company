import usersService from '@/services/users.service';
import operationWrapper from '@/store/users/operationWrapper';
import { UserData, Users } from '@/types/user.types';
import { IAddProps, IGetAllProps } from '@/types/usersStore.types';

const getAllOperation = async ({
  set,
}: IGetAllProps): Promise<Users | undefined> => {
  const response = await usersService.getAll();
  set({
    items: response,
    isLoaded: true,
  });
  return response;
};

const addOperation = async ({
  data,
  set,
  get,
}: IAddProps): Promise<UserData | undefined> => {
  const { items: users } = get();

  const response = await usersService.add(data);
  set({ items: [...users, response] });

  return response;
};

export const getAll = operationWrapper(getAllOperation);
export const add = operationWrapper(addOperation);
