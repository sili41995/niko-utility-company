import styled from '@emotion/styled';
import {
  IStyledTableDataProps,
  IStyledTableDataTextProps,
} from './DocumentsTableRow.types';

export const TableBodyRow = styled.tr`
  position: relative;
  background-color: ${({ theme }) => theme.colors.whiteBG};
`;

export const TableData = styled.td<IStyledTableDataProps>`
  padding: ${({ theme }) => theme.spacing()};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`;

export const TableDataText = styled.span<IStyledTableDataTextProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
  ${({ theme, trimText }) => (trimText ? theme.trimText : false)}
`;
