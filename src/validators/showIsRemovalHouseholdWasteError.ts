import { ErrorMessages } from '@/constants';
import { IsRemovalHouseholdWaste } from '@/types/subscriberAccountValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showIsRemovalHouseholdWasteError = (
  errors: FieldErrors<IsRemovalHouseholdWaste>
): void => {
  errors.isRemovalHouseholdWaste &&
    toasts.errorToast(ErrorMessages.isRemovalHouseholdWasteReqErr);
};

export default showIsRemovalHouseholdWasteError;
