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
  } = subscriberAccount;

  const apartmentType = apartmentTypes.find(
    ({ value }) => value === String(isLivingApartment)
  )?.title;

  const fullStreetName = `${street.type} ${street.name}`;

  return (
    <TableBodyRow>
      <TableData>{subscriberAccountNumber}</TableData>
      <TableData>{accountType}</TableData>
      <TableData>{fullStreetName}</TableData>
      <TableData>{house.number}</TableData>
      <TableData>{apartment}</TableData>
      <TableData>{apartmentType}</TableData>
      <TableData>тариф</TableData>
      <TableData>тариф</TableData>
      <TableData>{residents}</TableData>
    </TableBodyRow>
  );
};

export default SubscriberAccountsTableRow;
