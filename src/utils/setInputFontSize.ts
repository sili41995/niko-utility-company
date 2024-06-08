import { FormTypes, theme } from '@/constants';

const setInputFontSize = (formType: FormTypes | undefined): number => {
  switch (formType) {
    case FormTypes.auth:
      return theme.fontSize.other;

    default:
      return theme.fontSize.secondary;
  }
};

export default setInputFontSize;
