import { FC } from 'react';
import { IProps } from './SubscriberAccountsTableRow.types';
import {
  Checkbox,
  TableDataText,
  TableBodyRow,
  TableData,
} from './SubscriberAccountsTableRow.styled';
import { DateFormats, apartmentTypes } from '@/constants';
import { formatDate } from '@/utils';

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
    period,
  } = subscriberAccount;
  const apartmentType = apartmentTypes.find(
    ({ value }) => value === String(isLivingApartment)
  )?.title;
  const fullName = `${surname} ${name} ${middleName}`;
  const fullStreetName = `${street.type} ${street.name}`;
  const periodDate = formatDate({
    date: period,
    dateFormat: DateFormats.period,
  });

  return (
    <TableBodyRow>
      <TableData>{subscriberAccountNumber}</TableData>
      <TableData>
        <TableDataText trimText>{fullName}</TableDataText>
      </TableData>
      <TableData>{accountType}</TableData>
      <TableData>
        <TableDataText trimText>{fullStreetName}</TableDataText>
      </TableData>
      <TableData center>{house.number}</TableData>
      <TableData center>{apartment}</TableData>
      <TableData center>{apartmentType}</TableData>
      <TableData center>{periodDate}</TableData>
      <TableData center>тариф</TableData>
      <TableData center>{residents}</TableData>
      <TableData>
        <TableDataText center>
          <Checkbox
            type='checkbox'
            checked={isEligibleForBenefit}
            onChange={() => {}}
          />
        </TableDataText>
      </TableData>
      <TableData>
        <TableDataText trimText>{comment}</TableDataText>
      </TableData>
    </TableBodyRow>
  );
};

export default SubscriberAccountsTableRow;
