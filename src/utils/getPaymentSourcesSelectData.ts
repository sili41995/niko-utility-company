import { PaymentSources, TranslatedPaymentSources } from '@/constants';

const getPaymentSourcesSelectData = () => {
  const sources = Object.values(PaymentSources);

  return sources.map((value) => ({
    title: TranslatedPaymentSources[value],
    value,
  }));
};

export default getPaymentSourcesSelectData;
