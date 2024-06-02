import styled from '@emotion/styled';

export const Container = styled.div`
  & > button {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }
`;

export const Title = styled.p`
  margin-top: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.colors.tableData};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: 700;
  line-height: 1.2;
`;
