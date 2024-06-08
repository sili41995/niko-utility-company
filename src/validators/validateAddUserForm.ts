import { NewUser } from '@/types/data';
import { FieldErrors } from 'react-hook-form';
import showUsernameError from './showUsernameError';
import showPassError from './showPassError';
import showNameError from './showNameError';
import showEmailError from './showEmailError';

const validateAddUserForm = (errors: FieldErrors<NewUser>): void => {
  showUsernameError(errors);
  showPassError(errors);
  showNameError(errors);
  showEmailError(errors);
};

export default validateAddUserForm;
