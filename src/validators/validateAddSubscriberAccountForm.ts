import { IAddSubscriberAccountFormData } from '@/types/subscriberAccount.types';
import { FieldErrors } from 'react-hook-form';
import showHouseIdError from './showHouseIdError';
import showApartmentError from './showApartmentError';
import showContractNumberError from './showContractNumberError';
import showContractDateError from './showContractDateError';
import showNumberError from './showNumberError';
import showIsLivingApartmentError from './showIsLivingApartmentError';
import showCategoryError from './showCategoryError';
import showResidentsError from './showResidentsError';
import showPeriodError from './showPeriodError';
import showIsRemovalHouseholdWasteError from './showIsRemovalHouseholdWasteError';
import showSurnameError from './showSurnameError';
import showOwnerNameError from './showOwnerNameError';
import showMiddleNameError from './showMiddleNameError';
import showIsEligibleForBenefitError from './showIsEligibleForBenefitError';
import showPhoneError from './showPhoneError';
import showAdditionalPhoneError from './showAdditionalPhoneError';
import showOwnerEmailError from './showOwnerEmailError';

const validateAddSubscriberAccountForm = (
  errors: FieldErrors<IAddSubscriberAccountFormData>
): void => {
  showHouseIdError(errors);
  showApartmentError(errors);
  showNumberError(errors);
  showContractNumberError(errors);
  showContractDateError(errors);
  showCategoryError(errors);
  showIsLivingApartmentError(errors);
  showResidentsError(errors);
  showPeriodError(errors);
  showIsRemovalHouseholdWasteError(errors);
  showSurnameError(errors);
  showOwnerNameError(errors);
  showMiddleNameError(errors);
  showIsEligibleForBenefitError(errors);
  showPhoneError(errors);
  showAdditionalPhoneError(errors);
  showOwnerEmailError(errors);
};

export default validateAddSubscriberAccountForm;
