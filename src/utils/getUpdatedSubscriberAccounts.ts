import { SubscriberAccounts } from '@/types/subscriberAccount.types';
import { IGetUpdatedSubscriberAccountsProps } from '@/types/types';

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
