import { FullSubscriberAccounts } from '@/types/subscriberAccount.types';
import { IGetUpdatedSubscriberAccountsProps } from '@/types/subscriberAccountsStore.types';

const getUpdatedSubscriberAccounts = ({
  subscriberAccounts,
  updatedSubscriberAccount,
}: IGetUpdatedSubscriberAccountsProps): FullSubscriberAccounts =>
  subscriberAccounts.map((subscriberAccount) =>
    subscriberAccount.id === updatedSubscriberAccount.id
      ? { ...subscriberAccount, ...updatedSubscriberAccount }
      : subscriberAccount
  );

export default getUpdatedSubscriberAccounts;
