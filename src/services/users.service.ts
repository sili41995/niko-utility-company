import { NewUser, UserData, Users } from '@/types/user.types';
import HttpService from './http.service';

class UsersService extends HttpService {
  constructor() {
    super();
  }

  async fetchUsers(): Promise<Users> {
    const response = await this.get<Users>({
      url: 'users',
    });

    return response.data;
  }

  async addUser(data: NewUser): Promise<UserData> {
    const response = await this.post<UserData, NewUser>({
      url: 'users',
      data,
    });

    return response.data;
  }
}

const usersService = new UsersService();

export default usersService;
