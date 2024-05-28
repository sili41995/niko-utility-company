import styled from '@emotion/styled';

export const Container = styled.div``;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.primaryFont};
  font-size: ${({ theme }) => theme.fontSize.title}px;
  font-weight: ${({ theme }) => theme.fontWeight.other};
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.otherFont};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.other};
`;
