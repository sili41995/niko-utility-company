import styled from '@emotion/styled';
import { IStyledTableDataProps } from './BalancesTableRow.types';

export const TableBodyRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.whiteBG};
`;

export const TableData = styled.td<IStyledTableDataProps>`
  padding: ${({ theme }) => theme.spacing()};
  color: ${({ theme, isDebt }) =>
    isDebt === undefined
      ? theme.colors.black
      : isDebt
      ? theme.colors.red
      : theme.colors.green};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  text-transform: ${({ capitalize }) => (capitalize ? 'capitalize' : 'none')};
`;
