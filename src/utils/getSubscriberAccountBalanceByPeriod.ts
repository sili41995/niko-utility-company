import { PaymentSources } from '@/constants';
import { IPeriod, IPeriodId } from '@/types/period.types';
import { ISubscriberAccount } from '@/types/subscriberAccount.types';
import { IAmount, IGetSubscriberAccountBalanceByPeriod } from '@/types/types';

const getSubscriberAccountBalanceByPeriod = ({
  period,
  subscriberAccount,
}: {
  period: IPeriod;
  subscriberAccount: ISubscriberAccount;
}): IGetSubscriberAccountBalanceByPeriod => {
  const { prices, priceAdjustments, payments, balances } = subscriberAccount;

  const filterFunc = ({ periodId }: IPeriodId) => periodId === period.id;
  const amountIncrementFunc = (acc: number, { amount }: IAmount) =>
    acc + amount;

  const totalPrices = prices
    .filter(filterFunc)
    .reduce(
      (acc: number, { tariff: { price }, residents }) =>
        acc + residents * price,
      0
    );
  const totalPriceAdjustments = priceAdjustments
    .filter(filterFunc)
    .reduce((acc, { price }) => acc + price, 0);
  const totalBenefits = payments
    .filter(
      ({ periodId, source }) =>
        periodId === period.id && source === PaymentSources.benefits
    )
    .reduce(amountIncrementFunc, 0);
  const totalPayments = payments
    .filter(
      ({ periodId, source }) =>
        periodId === period.id && source !== PaymentSources.benefits
    )
    .reduce(amountIncrementFunc, 0);
  const startingBalance = balances
    .filter(filterFunc)
    .reduce(amountIncrementFunc, 0);

  const totalBalance =
    startingBalance +
    totalPrices +
    totalPriceAdjustments -
    totalBenefits -
    totalPayments;

  const balance = Math.abs(Number(totalBalance.toFixed(2)));
  const isDebt = totalBalance > 0;

  return {
    balance,
    isDebt,
    totalBenefits,
    totalPayments,
    totalPriceAdjustments,
    totalPrices,
  };
};

export default getSubscriberAccountBalanceByPeriod;
