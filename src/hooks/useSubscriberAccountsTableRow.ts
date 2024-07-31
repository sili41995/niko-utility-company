import { DateFormats, apartmentTypes } from '@/constants';
import { IUseSubscriberAccountsTableRow } from '@/types/hooks.types';
import { ISubscriberAccount } from '@/types/subscriberAccount.types';
import { formatDate, getSubscriberAccountBalanceByPeriod } from '@/utils';
import { useState } from 'react';

const useSubscriberAccountsTableRow = (
  subscriberAccount: ISubscriberAccount
): IUseSubscriberAccountsTableRow => {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const {
    number,
    accountType,
    apartment,
    isLivingApartment,
    residents,
    street,
    house,
    isEligibleForBenefit,
    period,
    documents,
    balances,
    owner: { surname, name, middleName },
  } = subscriberAccount;
  const apartmentType = apartmentTypes.find(
    ({ value }) => value === String(isLivingApartment)
  )?.title;
  const apartmentValue = apartment ?? '-';
  const fullName = `${surname} ${name} ${middleName}`;
  const fullStreetName = `${street.type} ${street.name}`;
  const { comment, name: documentName } = documents[0] ?? {};
  const periodDate = formatDate({
    date: period,
    dateFormat: DateFormats.date,
  });
  const { period: currentPeriod } = balances.find(
    ({ period }) => period.isCurrentPeriod
  )!;
  const { balance, isDebt } = getSubscriberAccountBalanceByPeriod({
    period: currentPeriod,
    subscriberAccount,
  });

  const toggleShowInfo = () => {
    setShowInfo((prevState) => !prevState);
  };

  return {
    number,
    fullName,
    accountType,
    fullStreetName,
    house: house.number,
    apartment: apartmentValue,
    apartmentType,
    period: periodDate,
    residents,
    isEligibleForBenefit,
    documentName,
    comment,
    showInfo,
    toggleShowInfo,
    isDebt,
    balance,
  };
};

export default useSubscriberAccountsTableRow;
