import { Credentials, UserData } from '@/types/data.types';
import HttpSerivce from './http.service';
import { SignInRes } from '@/types/authStore.types';

class AuthService extends HttpSerivce {
  constructor() {
    super();
  }

  async signIn(data: Credentials): Promise<SignInRes> {
    const response = await this.post<SignInRes, Credentials>({
      url: 'auth/signin',
      data,
    });

    return response.data;
  }

  async refreshUser(): Promise<UserData> {
    const response = await this.get<UserData>({
      url: 'auth/current',
    });

    return response.data;
  }
}

const authService = new AuthService();

export default authService;
