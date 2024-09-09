import { NewUser, UserData, Users } from '@/types/user.types';
import HttpService from './http.service';

class UsersService extends HttpService {
  constructor() {
    super();
  }

  async getAll(): Promise<Users> {
    const response = await this.get<Users>({
      url: 'users',
    });

    return response.data;
  }

  async add(data: NewUser): Promise<UserData> {
    const response = await this.post<UserData, NewUser>({
      url: 'users',
      data,
    });

    return response.data;
  }
}

const usersService = new UsersService();

export default usersService;
