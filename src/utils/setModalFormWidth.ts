import { FormTypes } from '@/constants';

const setModalFormWidth = (formType: FormTypes | undefined): string => {
  switch (formType) {
    case FormTypes.auth:
      return '600px';

    default:
      return '100%';
  }
};

export default setModalFormWidth;
