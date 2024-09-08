import { TranslatedPaymentSources } from '@/constants';
import { PaymentSourceType } from '@/types/paymentSource.types';

const getPaymentSourcesSelectData = () => {
  const sources = Object.values(PaymentSourceType);

  return sources.map((value) => ({
    title: TranslatedPaymentSources[value],
    value,
  }));
};

export default getPaymentSourcesSelectData;
