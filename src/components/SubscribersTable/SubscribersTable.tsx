import { FC } from 'react';
import {
  StyledTable,
  TableBody,
  TableBodyRow,
  TableData,
  TableHead,
  TableHeadRow,
  TableHeader,
} from '@/components/HousesTable/HousesTable.styled';
import { subscribers } from '@/data/subscribers';

const SubscribersTable: FC = () => {
  return (
    <StyledTable>
      <TableHead>
        <TableHeadRow>
          <TableHeader>Аб. рахунок</TableHeader>
          <TableHeader>Тип рахунку</TableHeader>
          <TableHeader>Нас. пункт</TableHeader>
          <TableHeader>Вулиця</TableHeader>
          <TableHeader>Буд.</TableHeader>
          <TableHeader>Кварт.</TableHeader>
          <TableHeader>Тип приміщення</TableHeader>
          <TableHeader>Параметри</TableHeader>
          <TableHeader>Послуги</TableHeader>
          <TableHeader>Стан рахунку</TableHeader>
          <TableHeader>Споживачі</TableHeader>
        </TableHeadRow>
      </TableHead>
      <TableBody>
        {subscribers.map(
          (
            {
              subscriberAccount,
              accountType,
              location,
              street,
              houseNumber,
              apartmentNumber,
              typeOfRoom,
              parameters,
              services,
              accountBalance,
              consumers,
            },
            index
          ) => (
            <TableBodyRow key={index}>
              <TableData>{subscriberAccount}</TableData>
              <TableData>{accountType}</TableData>
              <TableData>{location}</TableData>
              <TableData>{street}</TableData>
              <TableData>{houseNumber}</TableData>
              <TableData>{apartmentNumber}</TableData>
              <TableData>{typeOfRoom}</TableData>
              <TableData>{parameters}</TableData>
              <TableData>{services}</TableData>
              <TableData>{accountBalance}</TableData>
              <TableData>{consumers}</TableData>
            </TableBodyRow>
          )
        )}
      </TableBody>
    </StyledTable>
  );
};

export default SubscribersTable;
