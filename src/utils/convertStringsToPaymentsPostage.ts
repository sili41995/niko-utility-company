import { PaymentSources } from '@/constants';
import { NewPayments } from '@/types/data.types';
import { PaymentsDataFromCsv } from '@/types/types';

const convertStringsToPaymentsPostage = (
  data: PaymentsDataFromCsv
): NewPayments => {
  return data.map((item) => {
    console.log(item[5]);

    return {
      amount: item[6],
      date: new Date(item[0]),
      source: PaymentSources.postage,
    };
  });
};

export default convertStringsToPaymentsPostage;
