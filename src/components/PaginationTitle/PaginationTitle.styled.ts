import styled from '@emotion/styled';

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.tableData};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: 500;
`;

export const Accent = styled.span`
  font-weight: 700;
`;
