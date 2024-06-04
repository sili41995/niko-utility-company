import { FormTypes } from '@/constants';

const setInputHeight = (formType: FormTypes | undefined): number => {
  switch (formType) {
    case FormTypes.authForm:
      return 60;

    default:
      return 44;
  }
};

export default setInputHeight;
