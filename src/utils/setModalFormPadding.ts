import { FormTypes, theme } from '@/constants';

const setModalFormPadding = (formType: FormTypes | undefined): number => {
  switch (formType) {
    case FormTypes.authForm:
      return theme.padding.authForm;

    default:
      return 0;
  }
};

export default setModalFormPadding;
