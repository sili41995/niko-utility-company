import { ErrorMessages } from '@/constants';
import { AdsInPayments } from '@/types/generalSettingsValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showAdsInPaymentsError = (errors: FieldErrors<AdsInPayments>): void => {
  errors.adsInPayments && toasts.errorToast(ErrorMessages.adsInPaymentsReqErr);
};

export default showAdsInPaymentsError;
