import { IRegExp } from '@/types/types';

const regExp: IRegExp = {
  email: /^[-?\w.?!#$&'-~%?]+@\w+\.{1}\w{2,4}$/,
  phone: /^\+?[\d -]+$/,
  currentAccount: /^UA\d{27}$/,
  mfi: /^\d{6}$/,
  login: /^\S+$/,
};

export default regExp;
