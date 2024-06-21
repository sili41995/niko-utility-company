import { Messages } from '@/constants';
import { IsEligibleForBenefit } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showIsEligibleForBenefitError = (
  errors: FieldErrors<IsEligibleForBenefit>
): void => {
  errors.isEligibleForBenefit &&
    toasts.errorToast(Messages.isEligibleForBenefitReqErr);
};

export default showIsEligibleForBenefitError;
