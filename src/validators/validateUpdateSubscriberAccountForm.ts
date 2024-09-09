import { IUpdateSubscriberAccountFormData } from '@/types/subscriberAccount.types';
import { FieldErrors } from 'react-hook-form';
import showCommentError from './showCommentError';
import showDocumentNameError from './showDocumentNameError';
import showOwnerEmailError from './showOwnerEmailError';
import showAdditionalPhoneError from './showAdditionalPhoneError';
import showPhoneError from './showPhoneError';
import showIsEligibleForBenefitError from './showIsEligibleForBenefitError';
import showMiddleNameError from './showMiddleNameError';
import showOwnerNameError from './showOwnerNameError';
import showSurnameError from './showSurnameError';
import showIsRemovalHouseholdWasteError from './showIsRemovalHouseholdWasteError';
import showPeriodError from './showPeriodError';
import showResidentsError from './showResidentsError';
import showIsLivingApartmentError from './showIsLivingApartmentError';
import showCategoryError from './showCategoryError';
import showContractDateError from './showContractDateError';
import showContractNumberError from './showContractNumberError';
import showNumberError from './showNumberError';
import showApartmentError from './showApartmentError';
import showHouseIdError from './showHouseIdError';

const validateUpdateSubscriberAccountForm = (
  errors: FieldErrors<IUpdateSubscriberAccountFormData>
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
  showDocumentNameError(errors);
  showCommentError(errors);
};

export default validateUpdateSubscriberAccountForm;
