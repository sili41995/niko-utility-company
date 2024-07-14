import styled from '@emotion/styled';

export const StyledTable = styled.table`
  width: 100%;
  border-spacing: 1px;
  background-color: ${({ theme }) => theme.colors.grey};
`;

export const TableHead = styled.thead``;

export const TableHeadRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const TableHeader = styled.th`
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing()}`};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
`;

export const TableBody = styled.tbody``;
