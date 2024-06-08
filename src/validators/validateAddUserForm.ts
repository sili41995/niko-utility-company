import { NewUser } from '@/types/data.types';
import { FieldErrors } from 'react-hook-form';
import showLoginError from './showLoginError';
import showPassError from './showPassError';
import showNameError from './showNameError';
import showEmailError from './showEmailError';

const validateAddUserForm = (errors: FieldErrors<NewUser>): void => {
  showLoginError(errors);
  showPassError(errors);
  showNameError(errors);
  showEmailError(errors);
};

export default validateAddUserForm;
