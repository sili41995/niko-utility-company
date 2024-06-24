import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
  width: 800px;
  padding: ${({ theme }) => theme.spacing(4)};
`;
