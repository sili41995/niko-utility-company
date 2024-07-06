import { FC } from 'react';
import {
  StyledTable,
  TableBody,
  TableHead,
  TableHeadRow,
  TableHeader,
} from './SubscriberAccountsTable.styled';
import { useSubscriberAccountsStore } from '@/store/store';
import { selectSubscriberAccounts } from '@/store/subscriberAccounts/selectors';
import SubscriberAccountsTableRow from '@/components/SubscriberAccountsTableRow';

const SubscriberAccountsTable: FC = () => {
  const subscriberAccounts = useSubscriberAccountsStore(
    selectSubscriberAccounts
  );

  return (
    <StyledTable>
      <TableHead>
        <TableHeadRow>
          <TableHeader>Аб. рахунок</TableHeader>
          <TableHeader width={200}>ПІБ</TableHeader>
          <TableHeader width={125}>Тип рахунку</TableHeader>
          <TableHeader width={130}>Вулиця</TableHeader>
          <TableHeader>Буд.</TableHeader>
          <TableHeader>Кварт.</TableHeader>
          <TableHeader>Тип приміщення</TableHeader>
          <TableHeader>Послуги</TableHeader>
          <TableHeader>Стан рахунку</TableHeader>
          <TableHeader>Споживачі</TableHeader>
          <TableHeader>Пільговик</TableHeader>
          <TableHeader>Документ</TableHeader>
          <TableHeader>Коментар</TableHeader>
        </TableHeadRow>
      </TableHead>
      <TableBody>
        {subscriberAccounts.map((subscriberAccount) => (
          <SubscriberAccountsTableRow
            key={subscriberAccount.id}
            subscriberAccount={subscriberAccount}
          />
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default SubscriberAccountsTable;
