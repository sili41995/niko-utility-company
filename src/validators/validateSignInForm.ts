import { Credentials } from '@/types/data.types';
import { FieldErrors } from 'react-hook-form';
import showLoginError from './showLoginError';
import showPassError from './showPassError';

const validateSignInForm = (errors: FieldErrors<Credentials>): void => {
  showLoginError(errors);
  showPassError(errors);
};

export default validateSignInForm;
