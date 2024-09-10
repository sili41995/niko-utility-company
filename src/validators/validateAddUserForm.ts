import { NewUser } from '@/types/user.types';
import { FieldErrors } from 'react-hook-form';
import showLoginError from './showLoginError';
import showPasswordError from './showPasswordError';
import showUserEmailError from './showUserEmailError';
import showUserNameError from './showUserNameError';

const validateAddUserForm = (errors: FieldErrors<NewUser>): void => {
  showLoginError(errors);
  showPasswordError(errors);
  showUserNameError(errors);
  showUserEmailError(errors);
};

export default validateAddUserForm;
