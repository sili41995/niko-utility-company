import { ISubscriberAccount } from '@/types/subscriberAccount.types';
import { IGetSubscriberAccountBalance } from '@/types/types';

const getSubscriberAccountBalance = (
  subscriberAccount: ISubscriberAccount
): IGetSubscriberAccountBalance => {
  const { balances, payments, prices, priceAdjustments } = subscriberAccount;

  const startingBalance = balances[0].amount;
  const currentPayments = payments
    .filter(({ period }) => period?.isCurrentPeriod)
    .reduce((acc, { amount }) => acc + amount, 0);
  const currentPrices = prices
    .filter(({ period }) => period.isCurrentPeriod)
    .reduce((acc, { amount }) => acc + amount, 0);
  const currentPriceAdjustments = priceAdjustments
    .filter(({ period }) => period.isCurrentPeriod)
    .reduce((acc, { price }) => acc + price, 0);

  const totalBalance =
    startingBalance + currentPrices + currentPriceAdjustments - currentPayments;
  const isDebt = totalBalance > 0;

  return { balance: Math.abs(Number(totalBalance.toFixed(2))), isDebt };
};

export default getSubscriberAccountBalance;
