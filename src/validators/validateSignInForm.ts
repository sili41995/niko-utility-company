import { Credentials } from '@/types/data';
import { FieldErrors } from 'react-hook-form';
import showUsernameError from './showUsernameError';
import showPassError from './showPassError';

const validateSignInForm = (errors: FieldErrors<Credentials>): void => {
  showUsernameError(errors);
  showPassError(errors);
};

export default validateSignInForm;
