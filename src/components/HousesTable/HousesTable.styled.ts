import styled from '@emotion/styled';

export const StyledTable = styled.table`
  width: 100%;
`;

export const TableHead = styled.thead``;

export const TableHeadRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.tableHeader};
`;

export const TableHeader = styled.th`
  padding: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
`;

export const TableBody = styled.tbody``;

export const TableBodyRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TableData = styled.td`
  padding: ${({ theme }) => theme.spacing()};
  color: ${({ theme }) => theme.colors.tableData};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
`;
