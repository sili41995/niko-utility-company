import { AuthParams } from '@/constants';

const getTokenFromLS = (): string | null => {
  const token = localStorage.getItem(AuthParams.tokenLSKey);
  return token ? JSON.parse(token) : null;
};

export default getTokenFromLS;
