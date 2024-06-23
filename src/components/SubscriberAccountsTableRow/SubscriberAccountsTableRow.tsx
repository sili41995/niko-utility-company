import { FC } from 'react';
import { IProps } from './SubscriberAccountsTableRow.types';
import { TableBodyRow, TableData } from './SubscriberAccountsTableRow.styled';
import { apartmentTypes } from '@/constants';

const SubscriberAccountsTableRow: FC<IProps> = ({ subscriberAccount }) => {
  const {
    subscriberAccount: subscriberAccountNumber,
    accountType,
    apartment,
    isLivingApartment,
    residents,
    street,
    house,
    surname,
    name,
    middleName,
    comment,
    isEligibleForBenefit,
  } = subscriberAccount;

  const apartmentType = apartmentTypes.find(
    ({ value }) => value === String(isLivingApartment)
  )?.title;
  const fullName = `${surname} ${name} ${middleName}`;
  const fullStreetName = `${street.type} ${street.name}`;

  return (
    <TableBodyRow>
      <TableData>{subscriberAccountNumber}</TableData>
      <TableData>{fullName}</TableData>
      <TableData>{accountType}</TableData>
      <TableData>{fullStreetName}</TableData>
      <TableData>{house.number}</TableData>
      <TableData>{apartment}</TableData>
      <TableData>{apartmentType}</TableData>
      <TableData>тариф</TableData>
      <TableData>тариф</TableData>
      <TableData>{residents}</TableData>
      <TableData>
        <input type='checkbox' checked={isEligibleForBenefit} />
      </TableData>
      <TableData>{comment}</TableData>
    </TableBodyRow>
  );
};

export default SubscriberAccountsTableRow;
