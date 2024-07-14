import { PaymentSources, TranslatedPaymentSources } from '@/constants';

const getPaymentSource = (source: PaymentSources): TranslatedPaymentSources =>
  TranslatedPaymentSources[source];

export default getPaymentSource;
