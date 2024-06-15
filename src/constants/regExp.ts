import { IRegExp } from '@/types/types';

const regExp: IRegExp = {
  email: /^[-?\w.?!#$&'-~%?]+@\w+\.{1}\w{2,4}$/,
  helpPhone: /^[\d -]+$/,
  currentAccount: /^UA\d{27}$/,
  mfi: /^\d{6}$/,
};

export default regExp;
