import { DateFormats, apartmentTypes } from '@/constants';
import { IUseSubscriberAccountsTableRow } from '@/types/hooks.types';
import { ISubscriberAccount } from '@/types/subscriberAccount.types';
import { formatDate } from '@/utils';
import { useState } from 'react';

const useSubscriberAccountsTableRow = (
  subscriberAccount: ISubscriberAccount
): IUseSubscriberAccountsTableRow => {
  const [editAccount, setEditAccount] = useState<boolean>(false);
  const {
    subscriberAccount: subscriberAccountNumber,
    accountType,
    apartment,
    isLivingApartment,
    residents,
    street,
    house,
    isEligibleForBenefit,
    period,
    documents,
    balance,
    owner: { surname, name, middleName },
  } = subscriberAccount;
  const apartmentType = apartmentTypes.find(
    ({ value }) => value === String(isLivingApartment)
  )?.title;
  const apartmentValue = apartment ?? '-';
  const fullName = `${surname} ${name} ${middleName}`;
  const fullStreetName = `${street.type} ${street.name}`;
  const { comment, document } = documents[0] ?? {};
  const periodDate = formatDate({
    date: period,
    dateFormat: DateFormats.date,
  });

  const toggleEditAccount = () => {
    setEditAccount((prevState) => !prevState);
  };

  return {
    subscriberAccountNumber,
    fullName,
    accountType,
    fullStreetName,
    house: house.number,
    apartment: apartmentValue,
    apartmentType,
    period: periodDate,
    balance,
    residents,
    isEligibleForBenefit,
    document,
    comment,
    toggleEditAccount,
    editAccount,
  };
};

export default useSubscriberAccountsTableRow;
