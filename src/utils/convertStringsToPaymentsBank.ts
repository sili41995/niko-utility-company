import subscriberAccountsService from '@/services/subscriberAccounts.service';
import { NewPaymentData, NewPayments } from '@/types/data.types';
import { IConvertStringsToPaymentsBankProps } from '@/types/types';

const convertStringsToPaymentsBank = ({
  data,
  source,
}: IConvertStringsToPaymentsBankProps): Promise<NewPayments> => {
  const promises = data.map(async (item): Promise<NewPaymentData> => {
    const subscriberAccount =
      await subscriberAccountsService.fetchSubscriberAccountByNumber(item[1]);

    return {
      amount: Number(item[5]),
      date: new Date(item[6]),
      source,
      subscriberAccountId: subscriberAccount.id,
    };
  });

  return Promise.all(promises);
};

export default convertStringsToPaymentsBank;
