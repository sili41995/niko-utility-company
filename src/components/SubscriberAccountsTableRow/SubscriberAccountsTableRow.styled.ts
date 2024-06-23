import styled from '@emotion/styled';
import {
  IStyledTableDataProps,
  IStyledTableDataTextProps,
} from './SubscriberAccountsTableRow.types';

export const TableBodyRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TableData = styled.td<IStyledTableDataProps>`
  padding: ${({ theme }) => theme.spacing()};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`;

export const Checkbox = styled.input``;

export const TableDataText = styled.span<IStyledTableDataTextProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
  ${({ theme, trimText }) => (trimText ? theme.trimText : false)}
`;
