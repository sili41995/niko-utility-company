import styled from '@emotion/styled';

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.other}px;
  font-weight: ${({ theme }) => theme.fontWeight.secondary};
`;
