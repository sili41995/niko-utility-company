import { FormTypes, theme } from '@/constants';

const setModalFormBoxShadow = (formType: FormTypes | undefined): string => {
  switch (formType) {
    case FormTypes.auth:
      return theme.shadows.secondary;

    default:
      return '';
  }
};

export default setModalFormBoxShadow;
