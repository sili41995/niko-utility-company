import { IGetUpdatedUsersProps, Users } from '@/types/data.types';

const getUpdatedUsers = ({
  users,
  updatedUser,
}: IGetUpdatedUsersProps): Users =>
  users.map((user) =>
    user.id === updatedUser.id ? { ...user, ...updatedUser } : user
  );

export default getUpdatedUsers;
