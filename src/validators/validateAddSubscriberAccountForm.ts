import { ISubscriberAccount } from '@/types/data.types';
import { FieldErrors } from 'react-hook-form';
import showHouseIdError from './showHouseIdError';
import showApartmentError from './showApartmentError';
import showSubscriberAccountError from './showSubscriberAccountError';
import showContractError from './showContractError';
import showContractDateError from './showContractDateError';
import showAccountTypeError from './showAccountTypeError';
import showIsLivingApartmentError from './showIsLivingApartmentError';
import showResidentsError from './showResidentsError';
import showPeriodError from './showPeriodError';
import showUtrError from './showUtrError';
import showPassportError from './showPassportError';
import showSurnameError from './showSurnameError';
import showNameError from './showNameError';
import showMiddleNameError from './showMiddleNameError';
import showPhoneError from './showPhoneError';
import showAdditionalPhoneError from './showAdditionalPhoneError';
import showSubscriberAccountEmailError from './showSubscriberAccountEmailError';
import showIsEligibleForBenefitError from './showIsEligibleForBenefitError';
import showIsRemovalHouseholdWasteError from './showIsRemovalHouseholdWasteError';
import showStreetIdError from './showStreetIdError';

const validateAddSubscriberAccountForm = (
  errors: FieldErrors<ISubscriberAccount>
): void => {
  showStreetIdError(errors);
  showHouseIdError(errors);
  showApartmentError(errors);
  showSubscriberAccountError(errors);
  showContractError(errors);
  showContractDateError(errors);
  showAccountTypeError(errors);
  showIsLivingApartmentError(errors);
  showResidentsError(errors);
  showPeriodError(errors);
  showUtrError(errors);
  showPassportError(errors);
  showSurnameError(errors);
  showNameError(errors);
  showMiddleNameError(errors);
  showPhoneError(errors);
  showAdditionalPhoneError(errors);
  showSubscriberAccountEmailError(errors);
  showIsEligibleForBenefitError(errors);
  showIsRemovalHouseholdWasteError(errors);
};

export default validateAddSubscriberAccountForm;
