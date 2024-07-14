import styled from '@emotion/styled';

export const StyledTable = styled.table`
  width: 100%;
  border-spacing: 1px;
`;

export const TableHead = styled.thead``;

export const TableHeadRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.tableHeader};
`;

export const TableHeader = styled.th`
  padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing()}`};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
`;

export const TableBody = styled.tbody``;
