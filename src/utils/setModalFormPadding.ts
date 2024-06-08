import { FormTypes, theme } from '@/constants';

const setModalFormPadding = (formType: FormTypes | undefined): number => {
  switch (formType) {
    case FormTypes.auth:
      return theme.padding.authForm;

    default:
      return 0;
  }
};

export default setModalFormPadding;
