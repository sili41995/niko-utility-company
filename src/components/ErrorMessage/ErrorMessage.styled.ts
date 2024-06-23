import styled from '@emotion/styled';

export const Message = styled.p`
  margin-top: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.colors.redIcon};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.secondary};
`;
