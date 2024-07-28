import { PaymentSources } from '@/constants';
import subscriberAccountsService from '@/services/subscriberAccounts.service';
import { NewPaymentData, NewPayments } from '@/types/data.types';
import { PaymentsDataFromCsv } from '@/types/types';

const convertStringsToPaymentsPostage = (
  data: PaymentsDataFromCsv
): Promise<NewPayments> => {
  const promises = data.map(async (item): Promise<NewPaymentData> => {
    const subscriberAccount =
      await subscriberAccountsService.fetchSubscriberAccountByNumber(item[5]);
    const date = item[0]
      .split('.')
      .reduceRight((acc, item) => `${acc}-${item}`);
    console.log(date);

    return {
      amount: Number(item[6]),
      date: new Date(date),
      source: PaymentSources.postage,
      subscriberAccountId: subscriberAccount.id,
    };
  });

  return Promise.all(promises);
};

export default convertStringsToPaymentsPostage;
