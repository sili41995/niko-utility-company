import { FC } from 'react';
import { IProps } from './SubscriberAccountsTableRow.types';
import {
  Checkbox,
  TableDataText,
  TableBodyRow,
  TableData,
  BtnCell,
  ShowInfoBtn,
} from './SubscriberAccountsTableRow.styled';
import { MdInfoOutline } from 'react-icons/md';
import { IconSizes } from '@/constants';
import { useSubscriberAccountsTableRow } from '@/hooks';
import SubscriberAccountInfoModalWin from '../SubscriberAccountInfoModalWin';

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
    isDebt,
    showInfo,
    toggleShowInfo,
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
        <BtnCell>
          <ShowInfoBtn onClick={toggleShowInfo}>
            <MdInfoOutline size={IconSizes.other} />
          </ShowInfoBtn>
        </BtnCell>
      </TableBodyRow>
      {showInfo && (
        <SubscriberAccountInfoModalWin
          setModalWinState={toggleShowInfo}
          subscriberAccount={subscriberAccount}
        />
      )}
    </>
  );
};

export default SubscriberAccountsTableRow;
