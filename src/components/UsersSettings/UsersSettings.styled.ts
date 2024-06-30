import styled from '@emotion/styled';

export const Container = styled.div``;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)};
  margin-top: ${({ theme }) => theme.spacing(6)};
`;
