import { Messages } from '@/constants';
import { AdsInPayments } from '@/types/generalSettingsValidator.types';
import { toasts } from '@/utils';
import { FieldErrors } from 'react-hook-form';

const showAdsInPaymentsError = (errors: FieldErrors<AdsInPayments>): void => {
  errors.adsInPayments && toasts.errorToast(Messages.adsInPaymentsReqErr);
};

export default showAdsInPaymentsError;
