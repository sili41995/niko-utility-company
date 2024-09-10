import { ErrorMessages } from '@/constants';
import { IsEligibleForBenefit } from '@/types/subscriberAccountValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showIsEligibleForBenefitError = (
  errors: FieldErrors<IsEligibleForBenefit>
): void => {
  errors.isEligibleForBenefit &&
    toasts.errorToast(ErrorMessages.isEligibleForBenefitReqErr);
};

export default showIsEligibleForBenefitError;
