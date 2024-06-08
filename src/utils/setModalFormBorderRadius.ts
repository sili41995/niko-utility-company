import { FormTypes, theme } from '@/constants';

const setModalFormBorderRadius = (formType: FormTypes | undefined): number => {
  switch (formType) {
    case FormTypes.auth:
      return theme.borderRadius.other;

    default:
      return 0;
  }
};

export default setModalFormBorderRadius;
