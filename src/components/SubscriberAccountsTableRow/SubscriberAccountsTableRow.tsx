import { FC, useState } from 'react';
import { IProps } from './SubscriberAccountsTableRow.types';
import {
  Checkbox,
  TableDataText,
  TableBodyRow,
  TableData,
  EditRowBtn,
  EditRowBtnCell,
} from './SubscriberAccountsTableRow.styled';
import { DateFormats, IconSizes, apartmentTypes } from '@/constants';
import { formatDate } from '@/utils';
import { MdEditNote } from 'react-icons/md';
import EditSubscriberAccountModalWin from '../EditSubscriberAccountModalWin';

const SubscriberAccountsTableRow: FC<IProps> = ({ subscriberAccount }) => {
  const [editAccount, setEditAccount] = useState<boolean>(false);
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
    isEligibleForBenefit,
    period,
    documents,
  } = subscriberAccount;
  const apartmentType = apartmentTypes.find(
    ({ value }) => value === String(isLivingApartment)
  )?.title;
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

  return (
    <>
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
        <TableData center>{document}</TableData>
        <TableData>
          <TableDataText trimText>{comment}</TableDataText>
        </TableData>
        <EditRowBtnCell>
          <EditRowBtn onClick={toggleEditAccount}>
            <MdEditNote size={IconSizes.other} />
          </EditRowBtn>
        </EditRowBtnCell>
      </TableBodyRow>
      {editAccount && (
        <EditSubscriberAccountModalWin
          setModalWinState={toggleEditAccount}
          subscriberAccount={subscriberAccount}
        />
      )}
    </>
  );
};

export default SubscriberAccountsTableRow;
