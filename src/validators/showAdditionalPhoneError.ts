import { Messages } from '@/constants';
import { AdditionalPhone } from '@/types/data.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showAdditionalPhoneError = (
  errors: FieldErrors<AdditionalPhone>
): void => {
  errors.additionalPhone && toasts.errorToast(Messages.additionalPhoneReqErr);
};

export default showAdditionalPhoneError;
