import { Messages } from '@/constants';
import { IsRemovalHouseholdWaste } from '@/types/subscriberAccountValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showIsRemovalHouseholdWasteError = (
  errors: FieldErrors<IsRemovalHouseholdWaste>
): void => {
  errors.isRemovalHouseholdWaste &&
    toasts.errorToast(Messages.isRemovalHouseholdWasteReqErr);
};

export default showIsRemovalHouseholdWasteError;
