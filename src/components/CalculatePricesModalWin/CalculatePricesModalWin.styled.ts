import styled from '@emotion/styled';

export const Container = styled.div`
  width: 800px;
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)};
  margin-top: ${({ theme }) => theme.spacing(6)};
`;

export const Text = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.primary};
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: ${({ theme }) => theme.fontWeight.secondary};
  text-transform: capitalize;
`;

export const Date = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.primary}px;
  font-weight: ${({ theme }) => theme.fontWeight.other};
`;
