import styled from '@emotion/styled';

export const Container = styled.div``;

export const Title = styled.p`
  margin-top: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.colors.tableData};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.secondary};
  line-height: 1.2;
`;
