import styled from '@emotion/styled';
import { IStyledTableDataProps } from './PricesTableRow.types';

export const TableBodyRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TableData = styled.td<IStyledTableDataProps>`
  padding: ${({ theme }) => theme.spacing()};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`;
