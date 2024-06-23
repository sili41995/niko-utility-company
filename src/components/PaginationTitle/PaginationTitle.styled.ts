import styled from '@emotion/styled';

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: ${({ theme }) => theme.fontWeight.primary};
`;

export const Accent = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.secondary};
`;
