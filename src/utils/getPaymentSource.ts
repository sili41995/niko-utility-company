import { TranslatedPaymentSources } from '@/constants';
import { PaymentSourceType } from '@/types/paymentSource.types';

const getPaymentSource = (
  source: PaymentSourceType
): TranslatedPaymentSources => TranslatedPaymentSources[source];

export default getPaymentSource;
