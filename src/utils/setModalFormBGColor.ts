import { FormTypes, theme } from '@/constants';

const setModalFormBGColor = (formType: FormTypes | undefined): string => {
  switch (formType) {
    case FormTypes.authForm:
      return theme.colors.authFormBG;

    default:
      return 'transparent';
  }
};

export default setModalFormBGColor;
