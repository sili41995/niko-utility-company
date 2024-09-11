import subscriberAccountsService from '@/services/subscriberAccounts.service';
import {
  IConvertStringsToPaymentsBankProps,
  IPaymentData,
  PaymentsData,
} from '@/types/payment.types';

const convertStringsToPaymentsBank = ({
  data,
  name,
}: IConvertStringsToPaymentsBankProps): Promise<PaymentsData> => {
  const promises = data.map(async (item): Promise<IPaymentData> => {
    const subscriberAccount =
      await subscriberAccountsService.fetchSubscriberAccountByNumber(item[1]);

    return {
      amount: Number(item[5]),
      date: new Date(item[6]),
      name,
      subscriberAccountId: subscriberAccount.id,
    };
  });

  return Promise.all(promises);
};

export default convertStringsToPaymentsBank;
