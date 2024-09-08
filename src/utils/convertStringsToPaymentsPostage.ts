import subscriberAccountsService from '@/services/subscriberAccounts.service';
import {
  IPaymentData,
  PaymentsData,
  PaymentsDataFromCsv,
} from '@/types/payment.types';
import { PaymentSourceType } from '@/types/paymentSource.types';

const convertStringsToPaymentsPostage = (
  data: PaymentsDataFromCsv
): Promise<PaymentsData> => {
  const promises = data.map(async (item): Promise<IPaymentData> => {
    const subscriberAccount =
      await subscriberAccountsService.fetchSubscriberAccountByNumber(item[5]);
    const date = item[0]
      .split('.')
      .reduceRight((acc, item) => `${acc}-${item}`);

    return {
      amount: Number(item[6]),
      date: new Date(date),
      source: PaymentSourceType.postage,
      subscriberAccountId: subscriberAccount.id,
    };
  });

  return Promise.all(promises);
};

export default convertStringsToPaymentsPostage;
