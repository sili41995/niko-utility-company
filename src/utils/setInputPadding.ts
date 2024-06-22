import { FormTypes, theme } from '@/constants';

const setInputPadding = (formType: FormTypes | undefined): string => {
  switch (formType) {
    case FormTypes.filter:
      return theme.spacing(2);

    case FormTypes.auth:
      return `
      ${theme.spacing(2)}
      ${theme.spacing(10)}`;

    default:
      return `
      ${theme.spacing(2)}
      ${theme.spacing(2)}
      ${theme.spacing(2)}
      ${theme.spacing(10)}`;
  }
};

export default setInputPadding;
