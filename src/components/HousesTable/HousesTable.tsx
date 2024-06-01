import { FC } from 'react';
import {
  StyledTable,
  TableBody,
  TableBodyRow,
  TableData,
  TableHead,
  TableHeadRow,
  TableHeader,
} from './HousesTable.styled';
import { houses } from '@/data/houses';

const HousesTable: FC = () => {
  return (
    <StyledTable>
      <TableHead>
        <TableHeadRow>
          <TableHeader>Нас. пункт</TableHeader>
          <TableHeader>Вулиця</TableHeader>
          <TableHeader>Дім</TableHeader>
          <TableHeader>Поверхів</TableHeader>
          <TableHeader>Експлуатація</TableHeader>
          <TableHeader>Тип будинку</TableHeader>
          <TableHeader>Будинок</TableHeader>
          <TableHeader>Територія</TableHeader>
          <TableHeader>Послуги</TableHeader>
          <TableHeader>Тариф</TableHeader>
          <TableHeader>Тариф2</TableHeader>
        </TableHeadRow>
      </TableHead>
      <TableBody>
        {houses.map(
          (
            {
              location,
              street,
              house,
              floors,
              exploitation,
              houseType,
              houseNumber,
              territory,
              services,
              rate,
              rateSecondary,
            },
            index
          ) => (
            <TableBodyRow key={index}>
              <TableData>{location}</TableData>
              <TableData>{street}</TableData>
              <TableData>{house}</TableData>
              <TableData>{floors}</TableData>
              <TableData>{exploitation}</TableData>
              <TableData>{houseType}</TableData>
              <TableData>{houseNumber}</TableData>
              <TableData>{territory}</TableData>
              <TableData>{services}</TableData>
              <TableData>{rate}</TableData>
              <TableData>{rateSecondary}</TableData>
            </TableBodyRow>
          )
        )}
      </TableBody>
    </StyledTable>
  );
};

export default HousesTable;
