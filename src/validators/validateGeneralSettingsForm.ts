import { IGeneralSettings } from '@/types/data.types';
import { FieldErrors } from 'react-hook-form';
import showHelpPhoneError from './showHelpPhoneError';
import showMFIError from './showMFIError';
import showCurrentAccountError from './showCurrentAccountError';

const validateGeneralSettingsForm = (
  errors: FieldErrors<IGeneralSettings>
): void => {
  showCurrentAccountError(errors);
  showMFIError(errors);
  showHelpPhoneError(errors);
};

export default validateGeneralSettingsForm;
