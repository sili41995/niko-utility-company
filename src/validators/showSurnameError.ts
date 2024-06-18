import { Messages } from '@/constants';
import { Surname } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showSurnameError = (errors: FieldErrors<Surname>): void => {
  errors.surname && toasts.errorToast(Messages.surnameReqErr);
};

export default showSurnameError;
