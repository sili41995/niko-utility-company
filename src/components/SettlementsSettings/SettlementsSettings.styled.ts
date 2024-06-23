import styled from '@emotion/styled';

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
`;

export const SettlementsList = styled.ul`
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

export const ListItem = styled.li`
  &:not(:first-of-type) {
    margin-top: ${({ theme }) => theme.spacing()};
  }
`;

export const Locality = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.secondary};
`;
