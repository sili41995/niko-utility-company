import {
  IGetUpdatedSubscriberAccountsProps,
  SubscriberAccounts,
} from '@/types/data.types';

const getUpdatedSubscriberAccounts = ({
  subscriberAccounts,
  updatedSubscriberAccount,
}: IGetUpdatedSubscriberAccountsProps): SubscriberAccounts =>
  subscriberAccounts.map((subscriberAccount) =>
    subscriberAccount.id === updatedSubscriberAccount.id
      ? { ...subscriberAccount, ...updatedSubscriberAccount }
      : subscriberAccount
  );

export default getUpdatedSubscriberAccounts;
