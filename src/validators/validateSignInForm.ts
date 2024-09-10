import { Credentials } from '@/types/auth.types';
import { FieldErrors } from 'react-hook-form';
import showLoginError from './showLoginError';
import showPasswordError from './showPasswordError';

const validateSignInForm = (errors: FieldErrors<Credentials>): void => {
  showLoginError(errors);
  showPasswordError(errors);
};

export default validateSignInForm;
