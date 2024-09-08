import { Credentials } from '@/types/auth.types';
import { FieldErrors } from 'react-hook-form';
import showLoginError from './showLoginError';
import showPassError from './showPassError';

const validateSignInForm = (errors: FieldErrors<Credentials>): void => {
  showLoginError(errors);
  showPassError(errors);
};

export default validateSignInForm;
