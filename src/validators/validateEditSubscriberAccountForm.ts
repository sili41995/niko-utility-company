import { ISubscriberAccount } from '@/types/data.types';
import { FieldErrors } from 'react-hook-form';
import showIsLivingApartmentError from './showIsLivingApartmentError';
import showResidentsError from './showResidentsError';
import showPeriodError from './showPeriodError';
import showPhoneError from './showPhoneError';
import showAdditionalPhoneError from './showAdditionalPhoneError';
import showIsEligibleForBenefitError from './showIsEligibleForBenefitError';
import showIsRemovalHouseholdWasteError from './showIsRemovalHouseholdWasteError';
import showSubscriberAccountEmailError from './showSubscriberAccountEmailError';
import showDocumentError from './showDocumentError';
import showCommentError from './showCommentError';

const validateEditSubscriberAccountForm = (
  errors: FieldErrors<ISubscriberAccount>
): void => {
  showIsLivingApartmentError(errors);
  showResidentsError(errors);
  showPeriodError(errors);
  showIsRemovalHouseholdWasteError(errors);
  showIsEligibleForBenefitError(errors);
  showPhoneError(errors);
  showAdditionalPhoneError(errors);
  showSubscriberAccountEmailError(errors);
  showDocumentError(errors);
  showCommentError(errors);
};

export default validateEditSubscriberAccountForm;
