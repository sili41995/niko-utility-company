import styled from '@emotion/styled';

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
