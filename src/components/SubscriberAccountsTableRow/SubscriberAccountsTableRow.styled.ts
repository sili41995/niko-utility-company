import styled from '@emotion/styled';
import {
  IStyledTableDataProps,
  IStyledTableDataTextProps,
} from './SubscriberAccountsTableRow.types';

export const TableBodyRow = styled.tr`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TableData = styled.td<IStyledTableDataProps>`
  padding: ${({ theme }) => theme.spacing()};
  color: ${({ theme, isBalance, isDebt }) =>
    isBalance
      ? isDebt
        ? theme.colors.red
        : theme.colors.green
      : theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 12px;
  font-weight: ${({ theme, isBalance }) =>
    isBalance ? theme.fontWeight.secondary : theme.fontWeight.primary};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`;

export const Checkbox = styled.input``;

export const TableDataText = styled.span<IStyledTableDataTextProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
  ${({ theme, trimText }) => (trimText ? theme.trimText : false)}
`;

export const EditRowBtnCell = styled.td`
  position: absolute;
  top: 50%;
  right: -24px;
  transform: translateY(-50%);
`;

export const EditRowBtn = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;

  & > svg {
    color: ${({ theme }) => theme.colors.primary};
    transition: color ${({ theme }) => theme.transitionDurationAndFunc},
      transform ${({ theme }) => theme.transitionDurationAndFunc};
    pointer-events: none;
  }

  &:is(:hover, :focus) > svg {
    color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.3);
  }
`;
