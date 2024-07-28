import styled from '@emotion/styled';

export const Container = styled.div`
  width: 800px;
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  margin-top: ${({ theme }) => theme.spacing(6)};
`;
