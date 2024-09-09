import { IGeneralSettings } from '@/types/generalSettings.types';
import { FieldErrors } from 'react-hook-form';
import showHelpPhoneError from './showHelpPhoneError';
import showCurrentAccountError from './showCurrentAccountError';
import showMfiError from './showMfiError';
import showAdsInPaymentsError from './showAdsInPaymentsError';

const validateGeneralSettingsForm = (
  errors: FieldErrors<IGeneralSettings>
): void => {
  showCurrentAccountError(errors);
  showMfiError(errors);
  showHelpPhoneError(errors);
  showAdsInPaymentsError(errors);
};

export default validateGeneralSettingsForm;
