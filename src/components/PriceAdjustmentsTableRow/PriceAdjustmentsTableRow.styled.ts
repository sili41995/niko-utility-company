import styled from '@emotion/styled';
import { IStyledTableDataProps } from './PriceAdjustmentsTableRow.types';

export const TableBodyRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.whiteBG};
`;

export const TableData = styled.td<IStyledTableDataProps>`
  padding: ${({ theme }) => theme.spacing()};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`;
