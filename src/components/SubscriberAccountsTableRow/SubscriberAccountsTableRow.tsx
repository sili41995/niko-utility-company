import { FC } from 'react';
import { IProps } from './SubscriberAccountsTableRow.types';
import {
  Checkbox,
  TableDataText,
  TableBodyRow,
  TableData,
  EditRowBtn,
  EditRowBtnCell,
} from './SubscriberAccountsTableRow.styled';
import { MdEditNote } from 'react-icons/md';
import EditSubscriberAccountModalWin from '@/components/EditSubscriberAccountModalWin';
import { IconSizes } from '@/constants';
import { useSubscriberAccountsTableRow } from '@/hooks';

const SubscriberAccountsTableRow: FC<IProps> = ({ subscriberAccount }) => {
  const {
    subscriberAccountNumber,
    fullName,
    accountType,
    fullStreetName,
    house,
    apartment,
    apartmentType,
    period,
    balance,
    residents,
    isEligibleForBenefit,
    document,
    comment,
    toggleEditAccount,
    editAccount,
    isDebt,
  } = useSubscriberAccountsTableRow(subscriberAccount);

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
        <TableData center>{house}</TableData>
        <TableData center>{apartment}</TableData>
        <TableData center>{apartmentType}</TableData>
        <TableData center>{period}</TableData>
        <TableData isDebt={isDebt} center isBalance>
          {balance}
        </TableData>
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
