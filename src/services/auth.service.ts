import { Credentials, UserData } from '@/types/data.types';
import HttpService from './http.service';
import { SignInRes } from '@/types/authStore.types';

class AuthService extends HttpService {
  constructor() {
    super();
  }

  async signIn(data: Credentials): Promise<SignInRes> {
    const response = await this.post<SignInRes, Credentials>({
      url: 'auth/sign-in',
      data,
    });

    return response.data;
  }

  async fetchProfile(): Promise<UserData> {
    const response = await this.get<UserData>({
      url: 'auth/profile',
    });

    return response.data;
  }
}

const authService = new AuthService();

export default authService;
