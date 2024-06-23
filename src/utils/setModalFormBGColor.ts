import { FormTypes, theme } from '@/constants';

const setModalFormBGColor = (formType: FormTypes | undefined): string => {
  switch (formType) {
    case FormTypes.auth:
      return theme.colors.white;

    default:
      return 'transparent';
  }
};

export default setModalFormBGColor;
